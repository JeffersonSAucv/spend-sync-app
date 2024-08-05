import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-alert',
  standalone: true,
  imports: [NgClass],
  templateUrl: './auth-alert.component.html',
  styleUrl: './auth-alert.component.scss',
})
export class AuthAlertComponent {
  @Input() public error?: string[];

  get messages(): string[] {
    return (
      this.error ?? [
        'Your account has been created successfully. Redirecting to Dashboard...!',
      ]
    );
  }
}
