import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../utils/interfaces/menu-items.interface';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
  public menuItems = signal<MenuItem[]>([
    {
      label: 'Dashboard',
      icon: 'bi bi-grid-fill fs-icon-normal',
      path: '/dashboard',
      isExact: true,
    },
    {
      label: 'Bills',
      icon: 'bi bi-currency-dollar fs-icon-normal fs-icon-small',
      path: '/dashboard/bills',
      isExact: false,
    },
    {
      label: 'Goals',
      icon: 'bi bi-trophy-fill fs-icon-normal',
      path: '/dashboard/goals',
      isExact: false,
    },
    {
      label: 'Profile',
      icon: 'bi bi-person-fill fs-icon-normal fs-icon-small',
      path: '/dashboard/profile',
      isExact: false,
    },
  ]);
}
