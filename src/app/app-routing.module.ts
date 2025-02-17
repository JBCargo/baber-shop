import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'booking', component: BookingPageComponent },
  { path: 'confirmation', component: ConfirmPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
