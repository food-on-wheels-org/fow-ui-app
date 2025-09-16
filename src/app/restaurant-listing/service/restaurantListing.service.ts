import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_RLIST } from 'src/constants/url';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RestaurantListingService {
    private fetchAllRestaurantsUrl = API_URL_RLIST + '/restaurant/fetchAllRestaurants';

	constructor(private http: HttpClient) {}

	getAllRestaurants(): Observable<any> {
		return this.http.get<any>(this.fetchAllRestaurantsUrl).
		pipe(
			catchError(this.handleError)
		);
	}

	private handleError(error: any) {
		console.error('An error occurred:', error);
		return throwError(error.message || error);
	}
}
