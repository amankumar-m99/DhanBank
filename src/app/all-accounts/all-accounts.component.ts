import { Component } from '@angular/core';
import { Account } from '../models/account/account';
import { AccountService } from '../services/account.service';
import { AccountNumber } from '../models/account/account-number';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent {
  accounts:Account[] =[];
  showLoading = false;
  errorOccured = false;
  noData=false;
  constructor(
    private accountService:AccountService
  ){
    this.setShowLoading();
    accountService.getAllAccounts().subscribe(response=>{
      this.accounts=response;
      if(this.accounts.length == 0){
        this.setNoData();
      }
      else{
        this. setDataFound();
      }
    }, error=>{
      this.setErrorOccured();
    })
  }

  setShowLoading(){
    this.showLoading = true;
    this.noData = false;
    this.errorOccured = false;
  }

  setNoData(){
    this.showLoading = false;
    this.noData = true;
    this.errorOccured = false;
  }

  setDataFound(){
    this.showLoading = false;
    this.errorOccured = false;
    this.noData=false;
  }

  setErrorOccured(){
    this.showLoading = false;
    this.noData = false;
    this.errorOccured = true;
  }

  markAsDelete(id:number){
    if(!confirm("Proceed with?"+ id)){
      return;
    }
    this.accounts?.forEach(account=>{
      if(account.id == id){
        this.accountService.markAccountAsDeleted(new AccountNumber(account.accountNumber)).subscribe(response=>{
          account.deleted = true;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
  }
}
