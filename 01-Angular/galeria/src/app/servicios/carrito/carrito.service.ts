import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-compras';
import { ItemGaleriaComponent } from 'src/app/item-galeria/item-galeria.component';

@Injectable()

export class CarritoService 
{
    carritoCompras:ItemCarritoCompras[] = [];

    agregarCarritoDeCompras(ItemCarrito:ItemCarritoCompras):ItemCarritoCompras[]
    {
        const identificador = ItemCarrito.valor;
        let indiceItem = -1;
        const existeElItem = this.carritoCompras.some(
            (Item:ItemCarritoCompras, indice) => 
            {
                if (Item.valor == identificador){
                    indiceItem = indice;
                    return true;
                } else {
                    return false;
                }
               return Item.valor == identificador 
            }
        )
        if (existeElItem){
            this.anadirAlContador(indiceItem);
            console.log('se anadio al carrito')
    
        } else {
            this.anadirAlCarrito(ItemCarrito);  
        }
        console.log('se anadio al carrito', ItemCarrito)
        return this.carritoCompras;
    }

    private anadirAlContador(indice:number)
    {
        this.carritoCompras[indice].cantidad ++;
    }

    private anadirAlCarrito(item:ItemCarritoCompras)
    {
        item.cantidad = 1;
        this.carritoCompras.splice(0, 0, item);
    }
}


/*
const respuestaSome = [1,2,3,4,5].some( // funcion que devuelve undefined
    (valor:number):boolean  => // tipo OR 
{
    return valor == 1; // hay algun 6  
});
console.log(respuestaSome); // valor

const respuestaEvery = [1,2,3,4,5].every( // funcion que devuelve undefined
    (valor:number):boolean  => // tipo AND
{
    return valor > 0; // todos mayores a cero
});
console.log(respuestaEvery); // valor


const respuestaFind = [1,2,3,4,5].find( // funcion que devuelve undefined
    (valor:number):boolean  =>
{
    return valor == 6;
   
});

console.log(respuestaFind); // valor

*/


/*
const respuesta = [1,2,3,4,5].forEach( // funcion que devuelve undefined
    (valor) =>
{
    console.log('Valor:', valor);
    if(valor == 4)
    {
        console.log('Te encontre 4 jejeje')
    }
    
    //console.log('Indice:', indice);
    //console.log('Arreglo:', arreglo);
    
});
console.log(respuesta); //undefined -> void 


/*
[1,2,3,4,5].forEach(function busqueda (valor, indice, arreglo)
{
    console.log('Valor:', valor);
    if(valor == 1)
    {
        console.log('Te encontre 1 jejeje')
    }
    
    //console.log('Indice:', indice);
    //console.log('Arreglo:', arreglo);
    
})*/

/*
[1,2,3,4,5].forEach(busqueda)
function busqueda (valor, indice, arreglo)
{
    console.log('Valor:', valor);
    if(valor == 1)
    {
        console.log('Te encontre 1 jejeje')
    }
    
    //console.log('Indice:', indice);
    //console.log('Arreglo:', arreglo);
    
}*/