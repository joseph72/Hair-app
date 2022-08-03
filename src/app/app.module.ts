import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from 'src/libs/ui-components/navbar/navbar.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
