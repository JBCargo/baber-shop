import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ServicesPageComponent,
    HomePageComponent,
    ContactPageComponent,
    LocationPageComponent,
    BookingPageComponent,
    ConfirmPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterLinkActive],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
