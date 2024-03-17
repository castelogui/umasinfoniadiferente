import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'inscricao', component: SubscribeComponent },
  { path: 'historia', component: TimelineComponent },
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
