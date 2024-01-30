import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRouteService } from '../services/user-route.service';

export const userRouteGuard: CanActivateFn = (route, state) => {
  const userRouterService = inject(UserRouteService);
  const router = inject(Router);

  if (userRouterService.getUserId()) {
    return true;
  } else {
    router.navigateByUrl('/');
    return false;
  }
};
