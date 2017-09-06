//Library from npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoogleSignInComponent} from 'angular-google-signin';

//config
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

//create new
import { AppComponent } from './app.component';
import { SimpleFirebaseComponent } from './simple-firebase/simple-firebase.component';
import { LoginPageComponent } from "./login-page/login-page.component";
import { SimpleHomepageComponent } from './simple-homepage/simple-homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFirebaseComponent,
    GoogleSignInComponent,
    LoginPageComponent,
    SimpleHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
