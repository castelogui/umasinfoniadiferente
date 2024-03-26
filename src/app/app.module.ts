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
// Admin
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminNavbarComponent } from './pages/admin/components/admin-navbar/admin-navbar.component';
import { AdminSettingsComponent } from './pages/admin/pages/admin-settings/admin-settings.component';
import { AdminAulasComponent } from './pages/admin/pages/admin-aulas/admin-aulas.component';
import { AdminTutoresComponent } from './pages/admin/pages/admin-tutores/admin-tutores.component';
import { AdminEventosComponent } from './pages/admin/pages/admin-eventos/admin-eventos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminUsersComponent } from './pages/admin/pages/admin-users/admin-users.component';
import { FormUserComponent } from './pages/admin/pages/admin-users/form-user/form-user.component';import { FormEventoComponent } from './pages/admin/pages/admin-eventos/form-evento/form-evento.component';
import { FormTutorComponent } from './pages/admin/pages/admin-tutores/form-tutor/form-tutor.component';

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
    LoginComponent,
    AdminComponent,
    AdminNavbarComponent,
    AdminSettingsComponent,
    AdminSettingsComponent,
    AdminAulasComponent,
    AdminTutoresComponent,
    AdminEventosComponent,
    PageNotFoundComponent,
    AdminUsersComponent,
    FormUserComponent,
    FormEventoComponent,
    FormTutorComponent,
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
