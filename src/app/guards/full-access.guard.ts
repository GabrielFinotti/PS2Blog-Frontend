import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const fullAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // router.navigate(['access']);

  return true;
};
