import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {
  title = 'Licoreria';

  @Input()
  titulo;

  @Input()
  textoBoton;

  @Input()
  nombreItem;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()
  @Output()
  cambioCerveza:EventEmitter<boolean> = new EventEmitter()

  url = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";
  notas = [1,2,3,4,5,6,7,8,9,10];


  constructor() { }



  alertar(){
    alert('auxilio me desmayo: ' + this.nombreItem);
  }
alertarblur(){
  alert('Alertar blur');
}

cambiarImagen(){
  const chelas = "https://media-cdn.tripadvisor.com/media/photo-s/09/0f/ad/dd/chelas.jpg";
  const cervezas = "http://www.dna-autoparts.com/23121-thickbox_default/bielas-forjadas-eagle-para-sr20det.jpg";

  //this.url = cervezas;

    if (this.url === cervezas)
  {
    this.url = chelas;
    this.cambioChela.emit(true);
  } else {
    this.url = cervezas;
    this.cambioCerveza.emit(true);
  }
  
}


ngOnInit() {
  console.log('Empezo')
}
ngOnDestroy(){
  console.log('Termino')
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

