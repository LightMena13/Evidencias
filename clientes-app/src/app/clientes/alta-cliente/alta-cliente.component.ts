import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../clientes.module';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit{

  cliente: Cliente;
  grupos: Grupo[];

  constructor (private clientesService: ClientesService){ }

  ngOnInit() {
      this.cliente = this.clientesService.nuevoCliente();
      this.grupos = this.clientesService.getGrupos();
  }

}
