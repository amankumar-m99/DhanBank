import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { PinChangeComponent } from './components/pin-change/pin-change.component';
import { BalanceComponent } from './components/balance/balance.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PinValidatorComponent } from './components/pin-validator/pin-validator.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllCardsComponent } from './components/all-cards/all-cards.component';
import { AllAccountsComponent } from './components/all-accounts/all-accounts.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { ModalComponent } from './util-components/modal/modal.component';
import { GrowingSpinnerComponent } from './util-components/growing-spinner/growing-spinner.component';
import { BorderSpinnerComponent } from './util-components/border-spinner/border-spinner.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { ViewAccountComponent } from './components/view-account/view-account.component';
import { ViewCardComponent } from './components/view-card/view-card.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';

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
    ModalComponent,
    GrowingSpinnerComponent,
    BorderSpinnerComponent,
    EditAccountComponent,
    ViewAccountComponent,
    ViewCardComponent,
    EditCardComponent
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
