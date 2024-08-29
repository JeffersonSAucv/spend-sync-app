import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuMobileComponent } from '../../components/menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from '../../components/menu-desktop/menu-desktop.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, MenuMobileComponent, MenuDesktopComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent {}
