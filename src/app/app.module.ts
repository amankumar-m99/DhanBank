import { NgModule } from '@angular/core';
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
import { MenuPlaceholderComponent } from './menu-placeholder/menu-placeholder.component';
import { PinValidatorComponent } from './pin-validator/pin-validator.component';

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
    MenuPlaceholderComponent,
    PinValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
