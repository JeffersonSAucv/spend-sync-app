import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuItem } from '../../utils/interfaces/menu-items.interface';
import {
  PAGE_LINKS,
  SETTINGS_LINKS,
} from '../../../shared/utils/constants/menu-links.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.scss',
})
export class MenuDesktopComponent {
  public pageLinks = signal<MenuItem[]>(PAGE_LINKS);
  public settingsLinks = signal<MenuItem[]>(SETTINGS_LINKS);

  public logout(): void {
    localStorage.removeItem('user');
  }
}
