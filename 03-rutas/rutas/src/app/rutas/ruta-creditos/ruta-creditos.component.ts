import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {
  // el rout-module tiene el servicio _router
  // devuelve un observable
  constructor(private readonly _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // el signo de dolar al final no sdice que eso es un OBSERVABLE
    const parametros$ = this._activatedRoute.params;
    const parametrosConsulta$ = this._activatedRoute.queryParams;
     
    //parametros de ruta y de consulta no necesitan las funciones
    //cath y complete son especiales
    parametrosConsulta$.subscribe(
      (parametrosConsulta)=> {
        console.log('Parametros consulta', parametrosConsulta);
      }
    )


    parametros$.subscribe(
      (parametros)=>
      {
        //ok TRY
        console.log('Parametros', parametros);

      },
      (error)=>  // CATCH
      {
        console.log('Error', error)
      },
      () => { //Completado //opcional
        console.log('Completado')
      }
      

    )

    
  }

}
