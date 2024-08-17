import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/loginPage/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout/auth-layout.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [isNotAuthenticatedGuard],
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        canActivate: [isNotAuthenticatedGuard],
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
    canActivate: [isAuthenticatedGuard],
  },
  { path: '**', redirectTo: 'login' },
];
