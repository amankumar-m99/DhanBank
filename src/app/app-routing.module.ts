import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { PinChangeComponent } from './pin-change/pin-change.component';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';
import { PinValidatorComponent } from './pin-validator/pin-validator.component';
import { DepositComponent } from './deposit/deposit.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'info', component:InfoPageComponent },
  { path:'scan', component:QrScannerComponent },
  { path:'login', component:LoginComponent },
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
