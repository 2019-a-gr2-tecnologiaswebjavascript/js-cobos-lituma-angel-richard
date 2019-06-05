import { Injectable } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogueado:boolean = false;
  roles = [];
  constructor(private readonly _router:Router) {   
  }
  login(password:string, usuario:string)
  {
    if (password === '1234' && usuario == 'Richard')
    {
      this.estaLogueado = true;
      const url = ['/creditos','listos', 'examen'];
      this._router.navigate(url);
    } else
    { 
      return false;
    }
  
  }

  logout ()
  {
    this.estaLogueado= false;
  }


}
