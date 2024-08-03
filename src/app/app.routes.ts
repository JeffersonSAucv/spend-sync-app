import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/loginPage/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
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
