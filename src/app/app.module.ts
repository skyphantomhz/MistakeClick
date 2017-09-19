//Library from npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

//config
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

//create new
import { AppComponent } from './app.component';
import { SimpleFirebaseComponent } from './simple-firebase/simple-firebase.component';
import { LoginPageComponent } from "./loginpage/loginpage.component";
import { SimpleHomepageComponent } from './simple-homepage/simple-homepage.component';
import { CheckLoginService } from "./services/check-login.service";
import { AuthenticationService } from "./services/authentication.service";
import { HomepageComponent } from './homepage/homepage.component';
import { MessageComponent } from './message/message.component';
import { DetailMessageComponent } from './detail-message/detail-message.component';
import { DetailMessageMineComponent } from './detail-message-mine/detail-message-mine.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("554888823472-lagaqqu8bd1iamiid39t9o6vff5ro8lu.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("136643413621286")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SimpleFirebaseComponent,
    LoginPageComponent,
    SimpleHomepageComponent,
    HomepageComponent,
    MessageComponent,
    DetailMessageComponent,
    DetailMessageMineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, CheckLoginService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
