import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AulasComponent } from './pages/aulas/aulas.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminSettingsComponent } from './pages/admin/pages/admin-settings/admin-settings.component';
import { AdminAulasComponent } from './pages/admin/pages/admin-aulas/admin-aulas.component';
import { AdminEventosComponent } from './pages/admin/pages/admin-eventos/admin-eventos.component';
import { AdminTutoresComponent } from './pages/admin/pages/admin-tutores/admin-tutores.component';
import { AdminUsersComponent } from './pages/admin/pages/admin-users/admin-users.component';

const routes: Routes = [
  { path: '', title: 'Uma Sinfonia Diferente', component: HomeComponent },
  { path: 'aulas', title: 'Aulas', component: AulasComponent },
  { path: 'inscricao', title: 'Inscrição', component: SubscribeComponent },
  { path: 'historia', title: 'História', component: TimelineComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  {
    path: 'admin',
    title: 'Administrar',
    component: AdminComponent,
    children: [
      {
        path: 'settings',
        title: 'Configurações',
        component: AdminSettingsComponent,
      },
      {
        path: 'aulas',
        title: 'Aulas',
        component: AdminAulasComponent,
      },
      {
        path: 'events',
        title: 'Eventos',
        component: AdminEventosComponent,
      },
      {
        path: 'tutors',
        title: 'Professores',
        component: AdminTutoresComponent,
      },
      {
        path: 'users',
        title: 'Usuários',
        component: AdminUsersComponent,
      },
    ],
  },
  {
    path: '**',
    title: '#Página não encontrada!',
    component: PageNotFoundComponent,
  },
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
