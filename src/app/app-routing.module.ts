import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'inscricao', component: SubscribeComponent },
  { path: 'historia', component: TimelineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app/admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      window.scrollTo(0, 0);
    });
  }
}
