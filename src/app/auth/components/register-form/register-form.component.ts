import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { FormsValidatorService } from '../../../shared/services/forms-validator.service';
import { EMAIL_REGEX } from '../../../shared/utils/constants/common.constants';
import { AuthAlertComponent } from '../auth-alert/auth-alert.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AuthAlertComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent implements OnDestroy {
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _formsValidators = inject(FormsValidatorService);

  private redirectTimeout?: number;

  public registerForm: FormGroup = this._formBuilder.group(
    {
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
    },
    {
      validators: this._formsValidators.fieldsEqualMatch(
        'password',
        'confirmPassword'
      ),
    }
  );

  public isLoading: boolean = false;
  public isSuccessResponse: boolean = false;
  public error: string[] | undefined = undefined;

  public handleSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this._authService
      .register({
        nickname: this.registerForm.value.fullname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.isSuccessResponse = true;
          localStorage.setItem('user', JSON.stringify(res));
          this.redirectTimeout = window.setTimeout(() => {
            this._router.navigate(['/dashboard']);
          }, 3000);
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error.message;
          console.log(err);
        },
      });
  }

  public hasError(controlName: string): boolean {
    return (
      this.registerForm.controls[controlName].touched &&
      this.registerForm.controls[controlName].invalid
    );
  }

  ngOnDestroy(): void {
    clearTimeout(this.redirectTimeout);
  }
}
