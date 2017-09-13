//Library from npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { AgmCoreModule } from '@agm/core'

//config
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

//create new
import { CheckLoginService } from "./services/check-login.service";
import { AuthenticationService } from "./services/authentication.service";
import { GeoService } from "./services/geo.service";

import { AppComponent } from './app.component';
import { SimpleFirebaseComponent } from './simple-firebase/simple-firebase.component';
import { LoginPageComponent } from "./loginpage/loginpage.component";
import { SimpleHomepageComponent } from './simple-homepage/simple-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { DetailPointUserComponent } from './detail-point-user/detail-point-user.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleApi)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.facebookApi)
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
    GoogleMapComponent,
    DetailPointUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireDatabaseModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, CheckLoginService, AuthenticationService, GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
