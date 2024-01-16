import { Injectable } from '@angular/core';
import { StaticData } from '../../static/static-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Card } from '../../models/card/card';
import { CardById } from '../../models/card/card-by-id';
import { CardByNumber } from '../../models/card/card-by-number';
import { CardPinChange } from '../../models/card/card-pin-change';
import { CardAdd } from '../../models/card/card-add';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  baseURL = StaticData.baseURL;

  constructor(private httpClient: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    let url = this.baseURL + '/cards';
    return this.httpClient.get<Card[]>(url).pipe(catchError(this.handleError));
  }

  getCardById(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/cardbyid/' + cardById.cardId;
    return this.httpClient.get<Card>(url).pipe(catchError(this.handleError));
  }

  getCardByNumber(cardByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/cardbynumber/' + cardByNumber.cardNumber;
    return this.httpClient.get<Card>(url).pipe(catchError(this.handleError));
  }

  addCard(cardAdd: CardAdd): Observable<Card> {
    let url = this.baseURL + '/card';
    return this.httpClient
      .post<Card>(url, cardAdd)
      .pipe(catchError(this.handleError));
  }

  updateCard(card: Card): Observable<Card> {
    let url = this.baseURL + '/card';
    return this.httpClient
      .put<Card>(url, card)
      .pipe(catchError(this.handleError));
  }

  recordInValidAttemptsById(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/record-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardById)
      .pipe(catchError(this.handleError));
  }

  recordInValidAttemptsByNumber(cardByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/record-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardByNumber)
      .pipe(catchError(this.handleError));
  }

  resetInValidAttemptsById(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/reset-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardById)
      .pipe(catchError(this.handleError));
  }

  resetInValidAttemptsByNumber(cardByumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/reset-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardByumber)
      .pipe(catchError(this.handleError));
  }

  changePinById(cardPinChange: CardPinChange): Observable<Card> {
    let url = this.baseURL + '/card/id/change-pin';
    return this.httpClient
      .patch<Card>(url, cardPinChange)
      .pipe(catchError(this.handleError));
  }

  changePinByNumber(cardPinChange: CardPinChange): Observable<Card> {
    let url = this.baseURL + '/card/number/change-pin';
    return this.httpClient
      .patch<Card>(url, cardPinChange)
      .pipe(catchError(this.handleError));
  }

  blockCardById(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/block';
    return this.httpClient
      .patch<Card>(url, cardById)
      .pipe(catchError(this.handleError));
  }

  blockCardByNumber(cardByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/block';
    return this.httpClient
      .patch<Card>(url, cardByNumber)
      .pipe(catchError(this.handleError));
  }

  unBlockCardById(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/unblock';
    return this.httpClient
      .patch<Card>(url, cardById)
      .pipe(catchError(this.handleError));
  }

  unBlockCardByNumber(cardByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/unblock';
    return this.httpClient
      .patch<Card>(url, cardByNumber)
      .pipe(catchError(this.handleError));
  }

  markCardByIdAsDeleted(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/mark-delete/';
    return this.httpClient
      .patch<Card>(url, cardById)
      .pipe(catchError(this.handleError));
  }

  markCardByNumberAsDeleted(cardyByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/mark-delete/';
    return this.httpClient
      .patch<Card>(url, cardyByNumber)
      .pipe(catchError(this.handleError));
  }

  unMarkCardByIdAsDeleted(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/unmark-delete/';
    return this.httpClient
      .patch<Card>(url, cardById)
      .pipe(catchError(this.handleError));
  }

  unMarkCardByNumberAsDeleted(cardByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/unmark-delete/';
    return this.httpClient
      .patch<Card>(url, cardByNumber)
      .pipe(catchError(this.handleError));
  }

  deleteCardByIdFromDatabase(cardById: CardById): Observable<Card> {
    let url = this.baseURL + '/card/id/' + cardById.cardId;
    return this.httpClient.delete<Card>(url).pipe(catchError(this.handleError));
  }

  deleteCardByNumberFromDatabase(cardByNumber: CardByNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/' + cardByNumber.cardNumber;
    return this.httpClient.delete<Card>(url).pipe(catchError(this.handleError));
  }

  /*------------------- Error handling ------------------ */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong.
    }
    // Return an observable with a user-facing error message.
    // return throwError(() => new Error('Something bad happened; please try again later.'));
    return throwError(() => error);
  }
  /**********************************************/
}
