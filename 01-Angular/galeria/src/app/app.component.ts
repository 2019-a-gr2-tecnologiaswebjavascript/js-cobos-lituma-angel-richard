import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  arregloFloresJs = [
    {
    nombre: "Papitas",
    descripcion: "A lo bestia"
  }, 
  {
    nombre: "Carnitas",
    descripcion: "Gorditas"
  }, 
  {
    nombre: "Chicas",
    descripcion: "Cheveres"
  }  
  ]

  cambioChela(evento:boolean)
  {
    console.log('llego a chela: ', evento);
  }
  
  cambioCerveza(evento:boolean)
  {
    console.log('llego a cerveza: ', evento);
  }
}


class Flor{
  constructor(public nombre:string,public descripcion:string) {
  }


 

}