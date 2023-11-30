import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './clientes.module';

@Injectable( )
export class ClientesService {

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() { 
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      }
    ]
  }
}
