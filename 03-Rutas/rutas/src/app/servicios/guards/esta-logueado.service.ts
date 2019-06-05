import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoService implements CanActivate 
{
  constructor(private readonly _authService:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean 
    {
      const estaLogueado = this._authService.estaLogueado;
      if (estaLogueado)
      {
        console.log('Bienvenido')
        return true;
      } else
      {
        console.log('No tiene permisos')
        return false;
      }
    }

}
