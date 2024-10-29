import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './components/reservation/reservation.component'; // Import the Reservation Component
import { MainPageComponent } from './components/main-page/main-page.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';


const routes: Routes = [  { path: 'reservation', component: ReservationComponent },
  { path: '', redirectTo: 'main-page', pathMatch: 'full' }, // Redirection vers MainPageComponent
  { path: 'main-page', component: MainPageComponent },   // Reservation route
  { path: 'restaurant', component: RestaurantComponent }, 
  // Reservation route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
