import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PinChangeComponent } from './pin-change/pin-change.component';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';
import { PinValidatorComponent } from './pin-validator/pin-validator.component';
import { DepositComponent } from './deposit/deposit.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { AllCardsComponent } from './all-cards/all-cards.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'admin', component:AdminComponent, children:[
    {path:'all-accounts', component:AllAccountsComponent},
    {path:'all-cards', component:AllCardsComponent},
    {path:'register-account', component:RegisterAccountComponent},
    {path:'register-card', component:RegisterCardComponent},
  ] },
  { path:'info', component:InfoPageComponent },
  { path:'scan', component:QrScannerComponent },
  { path:'menu', component:MenuComponent },
  { path:'pin-validator/:menu', component:PinValidatorComponent },
  { path:'withdraw', component:WithdrawComponent },
  { path:'deposit', component:DepositComponent },
  { path:'transfer', component:TransferComponent },
  { path:'pin-change', component:PinChangeComponent },
  { path:'balance', component:BalanceComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
