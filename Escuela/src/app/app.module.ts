import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraComponentComponent } from './primera-component/primera-component.component';
import { SegundaComponentComponent } from './segunda-component/segunda-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraComponentComponent,
    SegundaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
