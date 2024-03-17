import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardAulasComponent } from './components/card-aulas/card-aulas.component';
import { DetailsComponent } from './components/details/details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsComponent } from './components/maps/maps.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { TutoresComponent } from './components/tutores/tutores.component';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AulasComponent,
    CardAulasComponent,
    DetailsComponent,
    TutoresComponent,
    MapsComponent,
    InstagramComponent,
    SubscribeComponent,
    MenuNavComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
