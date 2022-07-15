import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AccountActivityComponent } from './component/account-activity/account-activity.component';
import { AccountInfoComponent } from './component/account-info/account-info.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component'; 
import { InvestorsComponent } from './component/investors/investors.component';
import { LoginComponent } from './component/login/login.component'; 
import { LogoutComponent } from './component/logout/logout.component';
import { SuccessComponent } from './component/success/success.component';
import { TransferComponent } from './component/transfer/transfer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'investors', component: InvestorsComponent},
  { path: 'contactUs', component: ContactUsComponent },
  {path: 'success/:id/:name', component: SuccessComponent, canActivate: [AuthGuard] , children: [

    {path: '', component: AccountInfoComponent},
    {path: 'accountInfo', component: AccountInfoComponent},
    {path: 'accountActivity', component: AccountActivityComponent},
    {path: 'transfer', component: TransferComponent},
    {path: 'changePassword', component: ChangePasswordComponent},
    {path: 'logout', component: LogoutComponent}
    

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
