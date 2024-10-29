import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestauListComponent } from './components/restau-list/restau-list.component';
import { RestauCardsComponent } from './components/restau-cards/restau-cards.component'; // Importer ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ActivityCardComponent,
    ActivityListComponent,
    MainPageComponent,
    NavBarComponent,
    ReservationComponent,
    RestaurantComponent,
    RestauListComponent,
    RestauCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Ajouter ReactiveFormsModule ici

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
