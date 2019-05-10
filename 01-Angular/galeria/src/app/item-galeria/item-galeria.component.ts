import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit {
  title = 'Licoreria';
  @Input()
  textoBoton;

  @Input()
  nombreItem;
  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('auxilio me desmayo: ' + this.nombreItem);
  }
}

/*
@DecoratorsClase()  // funcion que se ejecuta antes


class Usuario{
  @Decorators()
  private nombre = 'Richard';
  constructor(@DecoratorsConstructor()nombre)
  {}
  @DecoratorsVariable
  public metodoPublico() //no es necesario poner public
  {}
  private metodoPricado(){}
  protected metodoProtected (){}
} */

