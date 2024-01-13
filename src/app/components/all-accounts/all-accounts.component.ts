import { Component } from '@angular/core';
import { Account } from '../../models/account/account';
import { AccountService } from '../../services/account/account.service';
import { AccountByNumber } from '../../models/account/account-by-number';
import { StaticData } from '../../static/static-data';
import { AccountById } from '../../models/account/account-by-id';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent {
  assetPath:string = StaticData.assetsDirPath;
  emptyDataImg = this.assetPath.concat("imgs/empty-box.png");
  accounts:Account[] =[];
  showLoading = false;
  errorOccured = false;
  noData=false;
  accountDeletedCss = ["bg-danger", "text-light"];
  accounntInactive = ["bg-warning", "text-dark"];
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
  getRowCss(account:Account){
    let obj = {
      "text-dark" : !account.active,
      "bg-warning": !account.active,
      "bg-danger" : account.deleted,
      "text-light": account.deleted
    };
    return obj;
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

  restoreAccount(id:string){
    this.accountService.unMarkAccountAsDeletedById(new AccountById(id)).subscribe()
  }

  markAsDelete(id:string){
    if(!confirm("Proceed with?"+ id)){
      return;
    }
    this.accounts?.forEach(account=>{
      if(account.id == parseInt(id)){
        this.accountService.markAccountAsDeletedById(new AccountById(id)).subscribe(response=>{
          account.deleted = true;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
  }
}
