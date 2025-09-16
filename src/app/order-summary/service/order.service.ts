import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <-- Import here
import { API_URL_ORDER_SUMMARY } from 'src/constants/url';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private saveOrderUrl = API_URL_ORDER_SUMMARY + '/order/saveFoodOrder';

    constructor(private http: HttpClient) { }

    saveOrder(data: any): Observable<any> {
        return this.http.post<any>(this.saveOrderUrl, data).
            pipe(
                catchError(this.handleError)
            );
    }
    handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error.message || error);
    }
}