import { Component } from '@angular/core';
import { Account } from '../../models/account/account';
import { AccountService } from '../../services/account/account.service';
import { AccountByNumber } from '../../models/account/account-by-number';
import { StaticData } from '../../static/static-data';
import { AccountById } from '../../models/account/account-by-id';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  formGroup:FormGroup;
  hideDeleted:AbstractControl;
  constructor(
    private accountService:AccountService,
    private formBuilder:FormBuilder,
    private router:Router
  ){
    this.setShowLoading();
    this.formGroup = this.formBuilder.group({
      hideDeleted:[false]
    });
    this.hideDeleted = this.formGroup.controls['hideDeleted'];
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

  viewAccount(id:number){
    this.router.navigate(['view-account', id.toString()]);
  }
  editAccount(id:number){
    this.router.navigate(['edit-account', id.toString()]);
  }

  restoreAccount(id:number){
    if(!confirm("Restore account "+ id + " ?")){
      return;
    }
    this.accounts?.forEach(account=>{
      if(account.id == id){
        this.accountService.unMarkAccountAsDeletedById(new AccountById(id.toString())).subscribe(response=>{
          account.deleted = false;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
  }

  markAsDelete(id:number){
    if(!confirm("Proceed with "+ id + " ?")){
      return;
    }
    this.accounts?.forEach(account=>{
      if(account.id == id){
        this.accountService.markAccountAsDeletedById(new AccountById(id.toString())).subscribe(response=>{
          account.deleted = true;
        }, error=>{
          alert("Couldn't do it.");
        })
      }
    });
  }

  getActivationQuote(isActive:boolean):string{
    if(isActive){
      return "Active";
    }
    return "Inactive";
  }

  getDeletionQuote(isDeleted:boolean):string{
    if(isDeleted){
      return "Deleted";
    }
    return "Not deleted";
  }
}
