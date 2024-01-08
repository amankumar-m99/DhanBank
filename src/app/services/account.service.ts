import { Injectable } from '@angular/core';
import { StaticData } from '../static/static-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from '../models/account/account';
import { AccountId } from '../models/account/account-id';
import { AccountNumber } from '../models/account/account-number';
import { AccountAdd } from '../models/account/accountAdd';
import { AccountWithdraw } from '../models/account/accountWithdraw';
import { AccountDeposit } from '../models/account/accountDeposit';
import { FundTransferForm } from '../models/account/fund-transfer';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseURL = StaticData.baseURL;
  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    let url = this.baseURL + '/accounts';
    return this.httpClient
      .get<Account[]>(url)
      .pipe(catchError(this.handleError));
  }

  getAccountById(accountById: AccountId): Observable<Account> {
    let url = this.baseURL + '/account/id/' + accountById.accountId;
    return this.httpClient.get<Account>(url).pipe(catchError(this.handleError));
  }

  getAccountByAccountNumber(accountByNumber: AccountNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/' + accountByNumber.accountNumber;
    console.log("fetching from.",url)
    return this.httpClient.get<Account>(url).pipe(catchError(this.handleError));
  }

  addAccount(accountAdd: AccountAdd): Observable<Account> {
    let url = this.baseURL + '/account';
    return this.httpClient
      .post<Account>(url, accountAdd)
      .pipe(catchError(this.handleError));
  }

  updateAccount(account: Account): Observable<Account> {
    let url = this.baseURL + '/account';
    return this.httpClient
      .put<Account>(url, account)
      .pipe(catchError(this.handleError));
  }

  deposit(accountDeposit: AccountDeposit): Observable<Account> {
    let url = this.baseURL + '/account/deposit';
    return this.httpClient
      .patch<Account>(url, accountDeposit)
      .pipe(catchError(this.handleError));
  }

  withdraw(accountWithdraw: AccountWithdraw): Observable<Account> {
    let url = this.baseURL + '/account/withdraw';
    return this.httpClient
      .patch<Account>(url, accountWithdraw)
      .pipe(catchError(this.handleError));
  }

  fundTransfer(fundTransferForm: FundTransferForm): Observable<Account> {
    let url = this.baseURL + '/account/fund-transfer';
    return this.httpClient
      .patch<Account>(url, fundTransferForm)
      .pipe(catchError(this.handleError));
  }

  blockAccount(accountByNumber: AccountNumber): Observable<Account> {
    let url = this.baseURL + '/account/block';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  unBlockAccount(accountByNumber: AccountNumber): Observable<Account> {
    let url = this.baseURL + '/account/unblock';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  markAccountAsDeleted(accountByNumber: AccountNumber): Observable<Account> {
    let url = this.baseURL + '/account/mark-delete';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  unMarkAccountAsDeleted(accountByNumber: AccountNumber): Observable<Account> {
    let url = this.baseURL + '/account/unmark-delete';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  deleteAccountFromDatabaseById(accountId: AccountId): Observable<Account> {
    let url = this.baseURL + '/account/id' + accountId.accountId;
    return this.httpClient
      .delete<Account>(url)
      .pipe(catchError(this.handleError));
  }

  deleteAccountFromDatabaseByAccount(accountByNumber: AccountNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/' + accountByNumber.accountNumber;
    return this.httpClient
      .delete<Account>(url)
      .pipe(catchError(this.handleError));
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
