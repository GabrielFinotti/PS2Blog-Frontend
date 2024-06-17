import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/auth/user/login.service';

export const routerAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  if (!loginService.isAuthenticated()) {
    router.navigateByUrl('/access');

    return false;
  }

  return true;
};
