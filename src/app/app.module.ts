//Library from npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

//config
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

//create new
import { AppComponent } from './app.component';
import { SimpleFirebaseComponent } from './simple-firebase/simple-firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFirebaseComponent
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
