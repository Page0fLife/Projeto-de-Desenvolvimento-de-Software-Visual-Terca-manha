import { NgModule } from '@angular/core';
import { Usuario } from './Usuario';
import { Itens } from "./Itens";


export interface Inventario {
    id?: number;
    itemId: number;
    usuarioId: number;
    
}