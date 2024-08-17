import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const user = localStorage.getItem('user');

  if (user) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
