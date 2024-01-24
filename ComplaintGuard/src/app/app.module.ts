import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './modules/login-module/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/Services/auth.service';
//import { DefaultLayoutModule } from './Containers/default-layout/default-layout.module';
import { ComplaintsModule } from './modules/Complaints/complaints.module';
import { SideBarComponent } from './Containers/default-layout/side-bar/side-bar.component';
import { TopBarComponent } from './Containers/default-layout/top-bar/top-bar.component';
import { DefaultLayoutComponent } from './Containers/default-layout/default-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SideBarComponent,
    DefaultLayoutComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,

    ComplaintsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
