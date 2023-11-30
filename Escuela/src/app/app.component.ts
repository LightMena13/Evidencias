import { Component } from '@angular/core';

import { PrimeraComponentComponent } from './primera-component/primera-component.component';

import { SegundaComponentComponent } from './segunda-component/segunda-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Universidad De Guadalajara';
  nombre = 'Diego'
  apellidos = 'Mena Padilla'
}
