import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ListaModule} from './lista/lista.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {ListaModule } from './lista/lista.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
