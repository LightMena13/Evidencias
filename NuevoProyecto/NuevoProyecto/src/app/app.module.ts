import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnoComponentComponent } from './uno-component/uno-component.component';
import { DosComponentComponent } from './dos-component/dos-component.component';
import { TresComponentComponent } from './tres-component/tres-component.component';
import { CuatroComponentComponent } from './cuatro-component/cuatro-component.component';
import { CincoComponentComponent } from './cinco-component/cinco-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponentComponent,
    DosComponentComponent,
    TresComponentComponent,
    CuatroComponentComponent,
    CincoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
