import { FormGroup } from '@angular/forms';

export function hasErrorValidator(
  form: FormGroup<any>,
  controlName: string
): boolean {
  return (
    form.controls[controlName].touched && form.controls[controlName].invalid
  );
}
