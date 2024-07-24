import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/loginPage/loginPage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/pages/register-page/register-page.component').then(
        (c) => c.RegisterPageComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/pages/main-page/main-page.component').then(
        (c) => c.MainPageComponent
      ),
  },
  { path: '**', redirectTo: 'login' },
];
