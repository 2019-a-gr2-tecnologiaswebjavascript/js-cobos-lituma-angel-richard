import { Component } from '@angular/core';

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
      descripcion: "A lo bestia"
    }, 
  {
    titulo: "Don Pepito",
    nombre: "Carnitas",
    descripcion: "Gorditas"
  }, 
  {
    titulo: "Dona Maria ",
    nombre: "Chicas",
    descripcion: "Cheveres"
  }  
  ]

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