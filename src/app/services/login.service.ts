import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Card } from '../models/card';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginFormData } from '../models/login-form-data';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url ="http://localhost:8080/card";

  constructor(private _httpClient:HttpClient) { }

  getCard(card:LoginFormData):Observable<Card>{
    let myUrl = this.url + '/' + card.cardNumber;
    return this._httpClient.get<Card>(myUrl).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    // return throwError(() => new Error('Something bad happened; please try again later.'));
    return throwError(() => error);
  }
}
