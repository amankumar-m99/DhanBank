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
  accounts?:Account[];
  constructor(
    private accountService:AccountService
  ){
    accountService.getAllAccounts().subscribe(response=>{
      this.accounts=response;
    }, error=>{
      alert('Error '+error.status+' occured while loading all accounts.');
    })
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
