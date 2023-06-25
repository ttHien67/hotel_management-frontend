import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
