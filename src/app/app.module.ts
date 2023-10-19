import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { PinChangeComponent } from './pin-change/pin-change.component';
import { BalanceComponent } from './balance/balance.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PinValidatorComponent } from './pin-validator/pin-validator.component';
import { DepositComponent } from './deposit/deposit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WithdrawComponent,
    TransferComponent,
    PinChangeComponent,
    BalanceComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    PinValidatorComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
