import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { API_URL_MDIR } from "src/constants/url";

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
    private api_url = API_URL_MDIR + '/menuDirectory/fetchRestaurantAndMenuById/';

    constructor(private http:HttpClient) { }

    getMenuItemsByRestaurant(id: number) {
        return this.http.get<any>(`${this.api_url + id}`)
            .pipe(
                catchError(this.handleError)
            );
    }
    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error.message || error);
    }

}