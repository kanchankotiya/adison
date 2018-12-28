import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatBottomSheetModule, MatListModule, MatDatepickerModule, 
    MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule, MatInputModule } from '@angular/material';
import { MatDividerModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CookieService } from 'ngx-cookie-service';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseCountdownModule } from '@fuse/components/countdown/countdown.module';
import { FuseMaterialColorPickerModule } from '@fuse/components';
import { FuseHighlightModule } from '@fuse/components';
import { DocsComponentsMaterialColorPickerComponent } from 'app/main/documentation/components/material-color-picker/material-color-picker.component';

import { AnalyticsDashboardComponent, AnalyticsDashboardComponentDialog } from 'app/main/apps/dashboards/analytics/analytics.component';
import { AnalyticsDashboardService } from 'app/main/apps/dashboards/analytics/analytics.service';
import { DatepickerApiExample } from 'assets/angular-material-examples/datepicker-api/datepicker-api-example';
import { CardsComponent } from './cards/cards.component';
import { SelectCustomTriggerExample } from 'assets/angular-material-examples/select-custom-trigger/select-custom-trigger-example';

import { FuseSidebarModule } from '@fuse/components';
import { AcademyCoursesComponent } from 'app/main/apps/academy/courses/courses.component';

import { AcademyCoursesService } from 'app/main/apps/academy/courses.service';


const routes: Routes = [
    {
        path     : '**',
        component: AnalyticsDashboardComponent,
        resolve  : {
            data: AnalyticsDashboardService
        }
    },
    {
        path     : '**',
        component: AnalyticsDashboardComponentDialog,
        resolve  : {
            data: AnalyticsDashboardService
        }
    },
    {
        path     : 'material-color-picker',
        component: DocsComponentsMaterialColorPickerComponent
    },
    {
        path     : 'datepicker-api-example',
        component: DatepickerApiExample
    },
    {
        path     : 'select-custom-trigger-example',
        component: SelectCustomTriggerExample
    },   
    {
        path     : 'courses',
        component: AcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    }
   
    
    
];

@NgModule({
    declarations: [
        AnalyticsDashboardComponent,
        DocsComponentsMaterialColorPickerComponent,
        DatepickerApiExample,
        CardsComponent,
        SelectCustomTriggerExample,
        AcademyCoursesComponent, AnalyticsDashboardComponentDialog 
        
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,
        FuseCountdownModule,
        FuseMaterialColorPickerModule,
        FuseHighlightModule,
        MatDatepickerModule,
        MatBottomSheetModule,
        MatListModule,
        FuseSidebarModule,
        MatInputModule,
        FlexLayoutModule,
        CommonModule,
        MatDividerModule, MatTooltipModule, MatDialogModule,
       
        

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        ChartsModule,
        NgxChartsModule,

        FuseSharedModule,
        FuseWidgetModule
        
        
        
        
    ],
   
    providers   : [
        AnalyticsDashboardService,
        AcademyCoursesService,
        CookieService
        
       
        
    ]
})
export class AnalyticsDashboardModule
{
}

