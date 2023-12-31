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
import { HomeComponent } from './home/home.component';
import { PinValidatorComponent } from './pin-validator/pin-validator.component';
import { DepositComponent } from './deposit/deposit.component';
import { HttpClientModule } from '@angular/common/http';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { AdminComponent } from './admin/admin.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WithdrawComponent,
    TransferComponent,
    PinChangeComponent,
    BalanceComponent,
    PageNotFoundComponent,
    HomeComponent,
    PinValidatorComponent,
    DepositComponent,
    QrScannerComponent,
    InfoPageComponent,
    AdminComponent,
    AllCardsComponent,
    AllAccountsComponent,
    RegisterAccountComponent,
    RegisterCardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
