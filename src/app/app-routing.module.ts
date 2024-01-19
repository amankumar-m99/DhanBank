import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { PinChangeComponent } from './components/pin-change/pin-change.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { PinValidatorComponent } from './components/pin-validator/pin-validator.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { AllAccountsComponent } from './components/all-accounts/all-accounts.component';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { ViewCardComponent } from './components/view-card/view-card.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'admin', component:AdminComponent, children:[
    {path:'all-accounts', component:AllAccountsComponent},
    {path:'all-cards', component:AllCardsComponent},
    {path:'register-account', component:RegisterAccountComponent},
    {path:'register-card', component:RegisterCardComponent},
  ] },
  { path:'view-account/:accountId', component:ViewAccountComponent},
  { path:'edit-account/:accountId', component:EditAccountComponent},
  { path:'view-card/:cardId', component:ViewCardComponent},
  { path:'edit-card/:cardId', component:EditCardComponent},
  { path:'info', component:InfoPageComponent },
  { path:'scan', component:QrScannerComponent },
  { path:'menu', component:MenuComponent },
  { path:'pin-validator/:menu', component:PinValidatorComponent },
  { path:'withdraw', component:WithdrawComponent },
  { path:'deposit', component:DepositComponent },
  { path:'transfer', component:TransferComponent },
  { path:'pin-change', component:PinChangeComponent },
  { path:'balance', component:BalanceComponent },
  { path:'test', component:TestComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
