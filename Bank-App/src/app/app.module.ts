import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { InvestorsComponent } from './component/investors/investors.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { LoginComponent } from './component/login/login.component';
import { SuccessComponent } from './component/success/success.component';
import { AccountInfoComponent } from './component/account-info/account-info.component';
import { AccountActivityComponent } from './component/account-activity/account-activity.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { LogoutComponent } from './component/logout/logout.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    InvestorsComponent,
    ContactUsComponent,
    LoginComponent,
    SuccessComponent,
    AccountInfoComponent,
    AccountActivityComponent,
    TransferComponent,
    ChangePasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
