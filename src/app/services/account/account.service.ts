import { Injectable } from '@angular/core';
import { StaticData } from '../../static/static-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Account } from '../../models/account/account';
import { AccountById } from '../../models/account/account-by-id';
import { AccountByNumber } from '../../models/account/account-by-number';
import { AccountAdd } from '../../models/account/add/account-add';
import { AccountWithdrawByNumber } from '../../models/account/withdraw/account-withdraw-by-number';
import { FundTransferById } from '../../models/account/transfer/fund-transfer-by-id';
import { AccountDepositById } from '../../models/account/deposit/account-deposit-by-id';
import { AccountDepositByNumber } from '../../models/account/deposit/account-deposit-by-number';
import { AccountWithdrawById } from '../../models/account/withdraw/account-withdraw-by-id';
import { FundTransferByNumber } from 'src/app/models/account/transfer/fund-transfer-by-number';

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

  getAccountById(accountById: AccountById): Observable<Account> {
    let url = this.baseURL + '/account/id/' + accountById.accountId;
    return this.httpClient.get<Account>(url).pipe(catchError(this.handleError));
  }

  getAccountByAccountNumber(accountByNumber: AccountByNumber): Observable<Account> {
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

  depositById(accountDepositById: AccountDepositById): Observable<Account> {
    let url = this.baseURL + '/account/id/deposit';
    return this.httpClient
      .patch<Account>(url, accountDepositById)
      .pipe(catchError(this.handleError));
  }

  depositByNumber(accountDepositByNumber: AccountDepositByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/deposit';
    return this.httpClient
      .patch<Account>(url, accountDepositByNumber)
      .pipe(catchError(this.handleError));
  }

  withdrawById(accountWithdraw: AccountWithdrawById): Observable<Account> {
    let url = this.baseURL + '/account/id/withdraw';
    return this.httpClient
      .patch<Account>(url, accountWithdraw)
      .pipe(catchError(this.handleError));
  }

  withdrawByNumber(accountWithdraw: AccountWithdrawByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/withdraw';
    return this.httpClient
      .patch<Account>(url, accountWithdraw)
      .pipe(catchError(this.handleError));
  }

  fundTransferById(fundTransferForm: FundTransferById): Observable<Account> {
    let url = this.baseURL + '/account/id/fund-transfer';
    return this.httpClient
      .patch<Account>(url, fundTransferForm)
      .pipe(catchError(this.handleError));
  }

  fundTransferByNumber(fundTransferForm: FundTransferByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/fund-transfer';
    return this.httpClient
      .patch<Account>(url, fundTransferForm)
      .pipe(catchError(this.handleError));
  }

  blockAccountById(accountById: AccountById): Observable<Account> {
    let url = this.baseURL + '/account/id/block';
    return this.httpClient
      .patch<Account>(url, accountById)
      .pipe(catchError(this.handleError));
  }

  blockAccountByNumber(accountByNumber: AccountByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/block';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  unBlockAccountById(accountById: AccountById): Observable<Account> {
    let url = this.baseURL + '/account/id/unblock';
    return this.httpClient
      .patch<Account>(url, accountById)
      .pipe(catchError(this.handleError));
  }

  unBlockAccountByNumber(accountByNumber: AccountByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/unblock';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  markAccountAsDeletedById(accountById: AccountById): Observable<Account> {
    let url = this.baseURL + '/account/id/mark-delete';
    return this.httpClient
      .patch<Account>(url, accountById)
      .pipe(catchError(this.handleError));
  }

  markAccountAsDeletedByNumber(accountNumber: AccountByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/mark-delete';
    return this.httpClient
      .patch<Account>(url, accountNumber)
      .pipe(catchError(this.handleError));
  }

  unMarkAccountAsDeletedById(accountId: AccountById): Observable<Account> {
    let url = this.baseURL + '/account/id/unmark-delete';
    return this.httpClient
      .patch<Account>(url, accountId)
      .pipe(catchError(this.handleError));
  }

  unMarkAccountAsDeletedByNumber(accountByNumber: AccountByNumber): Observable<Account> {
    let url = this.baseURL + '/account/number/unmark-delete';
    return this.httpClient
      .patch<Account>(url, accountByNumber)
      .pipe(catchError(this.handleError));
  }

  deleteAccountFromDatabaseById(accountById: AccountById): Observable<Account> {
    let url = this.baseURL + '/account/id' + accountById.accountId;
    return this.httpClient
      .delete<Account>(url)
      .pipe(catchError(this.handleError));
  }

  deleteAccountFromDatabaseByNumber(accountByNumber: AccountByNumber): Observable<Account> {
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
