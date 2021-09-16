import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddProfileComponent } from './components/add-profile/add-profile.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { AuthModule, AuthHttpInterceptor } from "@auth0/auth0-angular";
import { environment as env } from "../environments/environment";
import { LoginButtonComponent } from './components/auth-components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/auth-components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/auth-components/signup-button/signup-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home-components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/global-components/header/header.component';
import { FooterComponent } from './components/global-components/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    AddProfileComponent,
    ProfileListComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}?game=*`]
      }
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
