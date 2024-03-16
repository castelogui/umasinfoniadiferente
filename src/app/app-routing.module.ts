import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { AulasComponent } from './aulas/aulas.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'aulas', component: AulasComponent },
  { path: 'inscricao', component: SubscribeComponent },
  { path: 'historia', component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
