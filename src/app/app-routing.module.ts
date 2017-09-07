import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from "./login-page/login-page.component";
import { SimpleFirebaseComponent } from "./simple-firebase/simple-firebase.component";
import { SimpleHomepageComponent } from "./simple-homepage/simple-homepage.component";
import { CheckLoginService } from "./services/check-login.service";

const routes: Routes = [

  {
    path: '',
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
