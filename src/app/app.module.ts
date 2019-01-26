import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';
import { InputsModule, MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { routes } from './routes';
import { SignupComponent } from './signup/signup.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    EscapeHtmlPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    UiModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
    InputsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.googleAnalyticsTrackingID),
    Ng5SliderModule,
  ],
  providers: [
    MDBSpinningPreloader,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
