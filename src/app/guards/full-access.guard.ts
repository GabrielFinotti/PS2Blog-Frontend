import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GetUserTokenService } from '../services/routerServices/userToken/get-user-token.service';

export const fullAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const getUserTokenService = inject(GetUserTokenService);

  if (getUserTokenService.isUserToken()) return true;

  router.navigateByUrl('/access');

  return false;
};
