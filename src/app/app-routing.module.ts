import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from "./loginpage/loginpage.component";
import { SimpleFirebaseComponent } from "./simple-firebase/simple-firebase.component";
import { SimpleHomepageComponent } from "./simple-homepage/simple-homepage.component";
import { CheckLoginService } from "./services/check-login.service";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'homepage',
    component: SimpleHomepageComponent,
    canActivate: [CheckLoginService]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
