import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ // en los declarations guardamos los componentes
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ // guardamos otros modulos
    BrowserModule //Comparte la funcionalidad de las Directivas  *ngIF, *ngFor
  ],
  providers: 
  [
    CarritoService
  ], // aqui guardamos los servicios
  bootstrap: [AppComponent] // aqui se pone el componente principal
})
export class AppModule { } // modulos puede tener componentes, servicios y otros modulos
