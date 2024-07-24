import { Component } from '@angular/core';
import { UserLocalStorage } from '../../../auth/utils/interfaces/register-req-res/register-rq-rs.interface';
import { CommonModule } from '@angular/common';

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
