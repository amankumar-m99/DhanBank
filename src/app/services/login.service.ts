import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Account } from '../models/account/account';
import { AccountById } from '../models/account/accountById';
import { AccountByNumber } from '../models/account/accountByNumber';
import { AccountAdd } from '../models/account/accountAdd';
import { Card } from '../models/card/card';
import { CardById } from '../models/card/cardById';
import { CardByNumber } from '../models/card/cardByNumber';
import { CardAdd } from '../models/card/CardAdd';
import { CardPinChange } from '../models/card/cardPinChange';
import { AccountWithdraw } from '../models/account/accountWithdraw';
import { AccountDeposit } from '../models/account/accountDeposit';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  baseURL="http://localhost:8080";
  
  constructor(private httpClient:HttpClient) {}
  
  /*------------------- Accounts ------------------ */
  getAllAccounts():Observable<Account[]>{
    let url = this.baseURL + '/accounts';
    return this.httpClient.get<Account[]>(url).pipe(catchError(this.handleError));
  }
  
  getAccountById(accountById:AccountById):Observable<Account>{
    let url = this.baseURL + '/account';
    const options = { params: {accountId:accountById.accountId}};
    return this.httpClient.get<Account>(url, options).pipe(catchError(this.handleError));
  }
  
  getAccountByAccountNumber(accountByNumber:AccountByNumber):Observable<Account>{
    let url = this.baseURL + '/account';
    const options = { params: {accountNumber : accountByNumber.accountNumber}};
    return this.httpClient.get<Account>(url, options).pipe(catchError(this.handleError));
  }
  
  addAccount(accountAdd:AccountAdd):Observable<Account>{
    let url=this.baseURL + "/account";
    return this.httpClient.post<Account>(url, accountAdd).pipe(catchError(this.handleError));
  }
  
  updateAccount(account:Account):Observable<Account>{
    let url=this.baseURL + "/account";
    return this.httpClient.put<Account>(url, account).pipe(catchError(this.handleError));
  }

  withdraw(accountWithdraw:AccountWithdraw):Observable<Account>{
    let url = this.baseURL+"/account/withdraw";
    return this.httpClient.patch<Account>(url, accountWithdraw).pipe(catchError(this.handleError));
  }

  deposit(accountDeposit:AccountDeposit):Observable<Account>{
    let url = this.baseURL+"/account/deposit";
    return this.httpClient.patch<Account>(url, accountDeposit).pipe(catchError(this.handleError));
  }
  
  blockAccount(accountByNumber:AccountByNumber):Observable<Account>{
    let url=this.baseURL + "/account/block";
    return this.httpClient.patch<Account>(url, accountByNumber).pipe(catchError(this.handleError));
  }
  
  deleteAccount(accountByNumber:AccountByNumber):Observable<Account>{
    let url=this.baseURL + "/account/delete";
    const options = { params: {accountNumber:accountByNumber.accountNumber}};
    return this.httpClient.delete<Account>(url, options).pipe(catchError(this.handleError));
  }
  
  /*------------------- Cards ------------------ */
  
  getAllCards():Observable<Card[]>{
    let url=this.baseURL + "/cards";
    return this.httpClient.get<Card[]>(url).pipe(catchError(this.handleError));
  }
  
  getCardById(cardById:CardById):Observable<Card>{
    let url = this.baseURL + '/card';
    const options = { params: {cardId:cardById.cardId}};
    return this.httpClient.get<Card>(url, options).pipe(catchError(this.handleError));
  }
  
  getCardByCardNumber(cardByNumber:CardByNumber):Observable<Card>{
    let url = this.baseURL + '/card';
    const options = { params: {cardNumber:cardByNumber.cardNumber}};
    return this.httpClient.get<Card>(url, options).pipe(catchError(this.handleError));
  }
  
  addCard(cardAdd:CardAdd):Observable<Card>{
    let url=this.baseURL + "/card";
    return this.httpClient.post<Card>(url, cardAdd).pipe(catchError(this.handleError));
  }
  
  incrementInvalidAttempts(cardByNumber:CardByNumber):Observable<Card>{
    let url = this.baseURL + "inc-invalid-attempt";
    return this.httpClient.patch<Card>(url,cardByNumber).pipe(catchError(this.handleError));
  }
  
  changePin(cardPinChange:CardPinChange):Observable<Card>{
    let url = this.baseURL + "/change-pin";
    return this.httpClient.patch<Card>(url,cardPinChange).pipe(catchError(this.handleError));
  }
  
  blockCard(cardByNumber:CardByNumber):Observable<Card>{
    let url = this.baseURL + "/change-pin";
    return this.httpClient.patch<Card>(url,cardByNumber).pipe(catchError(this.handleError));
  }
  
  deleteCard(cardByNumber:CardByNumber):Observable<Card>{
    let url = this.baseURL + "/change-pin";
    const options = { params: {cardNumber:cardByNumber.cardNumber}};
    return this.httpClient.delete<Card>(url, options).pipe(catchError(this.handleError));
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
}
