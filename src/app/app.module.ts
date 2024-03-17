import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AulasComponent } from './aulas/aulas.component';
import { CardAulasComponent } from './card-aulas/card-aulas.component';
import { DetailsComponent } from './details/details.component';
import { TutoresComponent } from './tutores/tutores.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsComponent } from './maps/maps.component';
import { InstagramComponent } from './instagram/instagram.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { TimelineComponent } from './timeline/timeline.component';
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
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
