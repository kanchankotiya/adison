import { Component, OnInit, ViewEncapsulation, OnDestroy, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseMatchMediaService } from '@fuse/services/match-media.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material';

import { AnalyticsDashboardService } from 'app/main/apps/dashboards/analytics/analytics.service';

@Component({
    selector     : 'analytics-dashboard',
    templateUrl  : './analytics.component.html',
    styleUrls    : ['./analytics.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AnalyticsDashboardComponent implements OnInit, OnDestroy
{
    widgets: any;
    widget1SelectedYear = '2016';
    widget5SelectedDay = 'today';
    categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];
    currentCategory: string;
    searchTerm: string;
    shortcutItems: any[];
    navigationItems: any[];
    filteredNavigationItems: any[];
    searching: boolean;
    mobileShortcutsPanelActive: boolean;

    @Input()
    navigation: any;

    @ViewChild('searchInput')
    searchInputField;

    @ViewChild('shortcuts')
    shortcutsEl: ElementRef;

    private _unsubscribeAll: Subject<any>;
    
    /**
     * Constructor
     *
     * @param {AnalyticsDashboardService} _analyticsDashboardService
     * @param {Renderer2} _renderer
     * @param {CookieService} _cookieService
     * @param {FuseMatchMediaService} _fuseMatchMediaService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {ObservableMedia} _observableMedia
     */
    constructor(public dialog: MatDialog,
        private _analyticsDashboardService: AnalyticsDashboardService,
        private _cookieService: CookieService,
        private _fuseMatchMediaService: FuseMatchMediaService,
        private _fuseNavigationService: FuseNavigationService,
        private _observableMedia: ObservableMedia,
        private _renderer: Renderer2
    )
    {
        // Register the custom chart.js plugin
        this._registerCustomChartJSPlugin();
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;


        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    openDialog() {
        const dialogRef = this.dialog.open(AnalyticsDashboardComponentDialog);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the widgets from the service
        this.widgets = this._analyticsDashboardService.widgets;

        // Subscribe to categories
        this._analyticsDashboardService.onCategoriesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(categories => {
                this.categories = categories;
            });

        // Subscribe to courses
        this._analyticsDashboardService.onCoursesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(courses => {
                this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
            });
        
            this.filteredNavigationItems = this.navigationItems = this._fuseNavigationService.getFlatNavigation(this.navigation);

            if ( this._cookieService.check('FUSE2.shortcuts') )
            {
                this.shortcutItems = JSON.parse(this._cookieService.get('FUSE2.shortcuts'));
            }
            else
            {
                // User's shortcut items
                this.shortcutItems = [
                    {
                        'title': 'Calendar',
                        'type' : 'item',
                        'icon' : 'today',
                        'url'  : '/apps/calendar'
                    },
                    {
                        'title': 'Mail',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/apps/mail'
                    },
                    {
                        'title': 'Contacts',
                        'type' : 'item',
                        'icon' : 'account_box',
                        'url'  : '/apps/contacts'
                    },
                    {
                        'title': 'To-Do',
                        'type' : 'item',
                        'icon' : 'check_box',
                        'url'  : '/apps/todo'
                    }
                ];
            }
    
            // Subscribe to media changes
            this._fuseMatchMediaService.onMediaChange
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(() => {
                    if ( this._observableMedia.isActive('gt-sm') )
                    {
                        this.hideMobileShortcutsPanel();
                    }
                });
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * Search
     *
     * @param event
     */
    search(event): void
    {
        const value = event.target.value.toLowerCase();

        if ( value === '' )
        {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;

            return;
        }

        this.searching = true;

        this.filteredNavigationItems = this.navigationItems.filter((navigationItem) => {
            return navigationItem.title.toLowerCase().includes(value);
        });
    }

    /**
     * Toggle shortcut
     *
     * @param event
     * @param itemToToggle
     */
    toggleShortcut(event, itemToToggle): void
    {
        event.stopPropagation();

        for ( let i = 0; i < this.shortcutItems.length; i++ )
        {
            if ( this.shortcutItems[i].url === itemToToggle.url )
            {
                this.shortcutItems.splice(i, 1);

                // Save to the cookies
                this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));

                return;
            }
        }

        this.shortcutItems.push(itemToToggle);

        // Save to the cookies
        this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    }

    /**
     * Is in shortcuts?
     *
     * @param navigationItem
     * @returns {any}
     */
    isInShortcuts(navigationItem): any
    {
        return this.shortcutItems.find(item => {
            return item.url === navigationItem.url;
        });
    }

    /**
     * On menu open
     */
    onMenuOpen(): void
    {
        setTimeout(() => {
            this.searchInputField.nativeElement.focus();
        });
    }

    /**
     * Show mobile shortcuts
     */
    showMobileShortcutsPanel(): void
    {
        this.mobileShortcutsPanelActive = true;
        this._renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }

    /**
     * Hide mobile shortcuts
     */
    hideMobileShortcutsPanel(): void
    {
        this.mobileShortcutsPanelActive = false;
        this._renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter courses by category
     */
    filterCoursesByCategory(): void
    {
        // Filter
        if ( this.currentCategory === 'all' )
        {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else
        {
            this.coursesFilteredByCategory = this.courses.filter((course) => {
                return course.category === this.currentCategory;
            });

            this.filteredCourses = [...this.coursesFilteredByCategory];

        }

        // Re-filter by search term
        this.filterCoursesByTerm();
    }

    /**
     * Filter courses by term
     */
    filterCoursesByTerm(): void
    {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if ( searchTerm === '' )
        {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else
        {
            this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    }
    /**
     * Register a custom plugin
     */
    private _registerCustomChartJSPlugin(): void
    {
        (<any>window).Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing): any {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                )
                {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i): any {
                    const meta = chart.getDatasetMeta(i);
                    if ( !meta.hidden )
                    {
                        meta.data.forEach(function (element, index): any {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }
}
@Component({
    selector: 'analytics-dashboard-component-dialog',
    templateUrl: 'analytics-dashboard-component-dialog.html',
  })
  export class AnalyticsDashboardComponentDialog {}



