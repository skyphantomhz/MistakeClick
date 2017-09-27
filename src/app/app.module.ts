//Library from npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { AgmCoreModule } from '@agm/core';
import { MdNativeDateModule, MdDialogModule, MdInputModule, MdDatepickerModule, MdButtonModule} from '@angular/material';
import { FormsModule, NgControl, ReactiveFormsModule }   from '@angular/forms';

import {DatePipe} from "@angular/common";

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
import { DialogMakeAppointmentComponent } from './dialog-make-appointment/dialog-make-appointment.component';
import { DetailPointAppointmentComponent } from './detail-point-appointment/detail-point-appointment.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { MessageComponent } from './message/message.component';
import { DetailMessageComponent } from './detail-message/detail-message.component';
import { DetailMessageMineComponent } from './detail-message-mine/detail-message-mine.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import {ColorPickerModule} from 'angular4-color-picker';




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
    DetailPointUserComponent,
    DialogMakeAppointmentComponent,
    DetailPointAppointmentComponent,
    AppointmentComponent,
    MessageComponent,
    DetailMessageComponent,
    DetailMessageMineComponent,
    SendmessageComponent
  ],
  entryComponents: [
    DialogMakeAppointmentComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireDatabaseModule,
    MdDialogModule,
    MdDatepickerModule,
    MdInputModule,
    FormsModule,
    ColorPickerModule,
    MdButtonModule,
    MdNativeDateModule,
    MdButtonModule
>
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
  {provide: LOCALE_ID, useValue: 'en-US'},
  CheckLoginService, AuthenticationService, GeoService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
