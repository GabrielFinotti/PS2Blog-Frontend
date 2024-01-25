import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccessRouterService } from '../services/access-router.service';

export const accessGuard: CanActivateFn = (route, state) => {
  // Injetando os serviços em varáveis para uso
  const router = inject(Router);
  const accessRouter = inject(AccessRouterService);
  // Verificando se a rota pode ser liberada
  if (accessRouter.getData()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
