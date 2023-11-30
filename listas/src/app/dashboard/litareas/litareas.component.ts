import { Component } from '@angular/core';

@Component({
  selector: 'app-litareas',
  templateUrl: './litareas.component.html',
  styleUrls: ['./litareas.component.css']
})
export class LitareasComponent {
  tarea="";
  constructor(){ }

  ngOnInit(): void{
  }

  agregartarea(){
    this.tarea;
  }

}
