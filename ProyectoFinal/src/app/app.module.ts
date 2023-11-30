import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ParteUnoComponent } from './parte-uno/parte-uno.component';
import { JuegoComponent } from './juego/juego.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ParteUnoComponent,
    JuegoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'juego', component: JuegoComponent},
      {path: '', redirectTo: '/index', pathMatch: "full"},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }