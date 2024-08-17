import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLocalStorage } from '../../../auth/utils/interfaces/auth/auth.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public get userData(): UserLocalStorage {
    return JSON.parse(localStorage.getItem('user')!);
  }
}
