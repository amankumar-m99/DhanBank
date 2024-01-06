import { Injectable } from '@angular/core';
import { StaticData } from '../static/static-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Card } from '../models/card/card';
import { CardId } from '../models/card/card-id';
import { CardNumber } from '../models/card/card-number';
import { CardAdd } from '../models/card/CardAdd';

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

  getCardById(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/cardbyid/' + cardId.cardId;
    return this.httpClient.get<Card>(url).pipe(catchError(this.handleError));
  }

  getCardByNumber(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/cardbynumber/' + cardNumber.cardNumber;
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

  recordInValidAttemptsById(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/record-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  recordInValidAttemptsByNumber(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/record-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  resetInValidAttemptsById(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/reset-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  resetInValidAttemptsByNumber(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/reset-invalidattempts';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  changePinById(cardId: CardId): Observable<Card> {
    let url = this.baseURL + 'card/id/change-pin';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  changePinByNumber(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + 'card/id/change-pin';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  blockCardById(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/block';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  blockCardByNumber(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/block';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  unBlockCardById(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/unblock';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  unBlockCardByNumber(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/unblock';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  markCardByIdAsDeleted(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/mark-delete/';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  markCardByNumberAsDeleted(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/mark-delete/';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  unMarkCardByIdAsDeleted(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/unmark-delete/';
    return this.httpClient
      .patch<Card>(url, cardId)
      .pipe(catchError(this.handleError));
  }

  unMarkCardByNumberAsDeleted(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/unmark-delete/';
    return this.httpClient
      .patch<Card>(url, cardNumber)
      .pipe(catchError(this.handleError));
  }

  deleteCardByIdFromDatabase(cardId: CardId): Observable<Card> {
    let url = this.baseURL + '/card/id/' + cardId.cardId;
    return this.httpClient.delete<Card>(url).pipe(catchError(this.handleError));
  }

  deleteCardByNumberFromDatabase(cardNumber: CardNumber): Observable<Card> {
    let url = this.baseURL + '/card/number/' + cardNumber.cardNumber;
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
