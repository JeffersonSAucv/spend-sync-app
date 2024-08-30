import { Component } from '@angular/core';
import { UserLocalStorage } from '../../../auth/utils/interfaces/auth/auth.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss',
})
export class HeaderDashboardComponent {
  public get user(): UserLocalStorage {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
