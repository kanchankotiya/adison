import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AnalyticsDashboardService implements Resolve<any>
{
    widgets: any[];
    onCategoriesChanged: BehaviorSubject<any>;
    onCoursesChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        this.onCategoriesChanged = new BehaviorSubject({});
        this.onCoursesChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getWidgets(),
                this.getCategories(),
                this.getCourses()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    getWidgets(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/analytics-dashboard-widgets')
                .subscribe((response: any) => {
                    this.widgets = response;
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get categories
     *
     * @returns {Promise<any>}
     */
    getCategories(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/academy-categories')
                .subscribe((response: any) => {
                    this.onCategoriesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Get courses
     *
     * @returns {Promise<any>}
     */
    getCourses(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/academy-courses')
                .subscribe((response: any) => {
                    this.onCoursesChanged.next(response);
                    resolve(response);
                }, reject);
        });
    }
}
