import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMAIL_REGEX } from '../../../shared/utils/constants/common.constants';
import { AuthAlertComponent } from '../../components/auth-alert/auth-alert.component';
import { hasErrorValidator } from '../../helpers/has-error.helper';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterLink, AuthAlertComponent, ReactiveFormsModule],
  templateUrl: 'login-page.component.html',
  styleUrl: 'login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private _authService = inject(AuthService);
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);

  public isLoading = signal<boolean>(false);
  public error?: string[];

  public loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    password: ['', [Validators.required]],
  });

  public handleLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    this._authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          localStorage.setItem('user', JSON.stringify(res));
          this._router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.error = err.error?.message;
          console.error(err);
        },
      });
  }

  public hasError(controlName: string): boolean {
    return hasErrorValidator(this.loginForm, controlName);
  }
}
