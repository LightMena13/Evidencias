import { Component } from '@angular/core';

import { UnoComponentComponent } from './uno-component/uno-component.component';

import { DosComponentComponent } from './dos-component/dos-component.component';

import { TresComponentComponent } from './tres-component/tres-component.component';

import { CuatroComponentComponent } from './cuatro-component/cuatro-component.component';

import { CincoComponentComponent } from './cinco-component/cinco-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';
  Nombre = 'Diego';
  Apellidos = 'Mena Padilla';
}
