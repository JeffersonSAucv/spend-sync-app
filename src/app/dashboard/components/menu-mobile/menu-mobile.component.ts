import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../utils/interfaces/menu-items.interface';
import { PAGE_LINKS } from '../../../shared/utils/constants/menu-links.constants';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
  public menuItems = signal<MenuItem[]>(PAGE_LINKS);
}
