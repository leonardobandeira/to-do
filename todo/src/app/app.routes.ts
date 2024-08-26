import { Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { TarefasComponent } from './core/pages/tarefas/tarefas.component';
import { LayoutComponent } from './core/template/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'tarefas', component: TarefasComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
];
