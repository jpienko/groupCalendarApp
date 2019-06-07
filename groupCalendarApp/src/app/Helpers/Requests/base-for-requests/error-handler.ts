import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ErrorHandler {


    constructor(private router: Router) { }

    handleError(error: HttpErrorResponse) {
        // const url = this.router.url;
        // const options = [{
        //     currentUrl: this.router.url,
        //     error: error.status
        // }];
        // if (true) {
        //     if (url !== '/error/0' && url !== '/error/400' && url !== '/error/403' && url !== '/error/404'
        //         && url !== '/error/500' && url !== '/error/501' && url !== '/error/502' && url !== '/error/503'
        //         && url !== '/error/504' && url !== '/error/505' && url !== '/error/506' && url !== '/error/507'
        //         && url !== '/error/508' && url !== '/error/509' && url !== '/error/510' && url !== '/error/511'
        //         && (this.router.url != null && this.router.url !== '/')) {
        //         sessionStorage.setItem('error', JSON.stringify(options));
        //     }
        // }
        // this.router.navigate(['/error/', error.status]);
        return error;
    }
}
