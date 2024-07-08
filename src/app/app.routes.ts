import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/loginPage/loginPage.component';

export const routes: Routes = [
  {path : '', redirectTo:'login', pathMatch: 'full'},
  {path : '**', redirectTo:'login'},
  {path :'login', component: LoginPageComponent}
];
