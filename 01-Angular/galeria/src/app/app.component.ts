import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  claseTitulo = 'rojo';

  estaMostrando = false;
  arregloFloresJs = [
    {
      titulo: "Don Jose",
      nombre: "Papitas",
      descripcion: "A lo bestia",
      notas:['papitas', 'empanadas']
    }, 
  {
    titulo: "Don Pepito",
    nombre: "Carnitas",
    descripcion: "Gorditas",
    notas:['fritada', 'motes']
  }, 
  {
    titulo: "Dona Maria ",
    nombre: "Chicas",
    descripcion: "Cheveres",
    notas:['perros calientes', 'hamburguesas']
  }  
  ]

  constructor(private readonly _carritoService:CarritoService)
  {

  }

  cambioChela(evento:boolean)
  {
    console.log('llego a chela: ', evento);
    this.claseTitulo = 'verde';
  }
  
  cambioCerveza(evento:boolean)
  {
    console.log('llego a cerveza: ', evento);
    this.claseTitulo = 'amarillo';
  }
  mostrar(estaMostrando)
  {
     this.estaMostrando = estaMostrando;
  
  }

}


class Flor{
  constructor(public nombre:string,public descripcion:string) {
  }


 

}