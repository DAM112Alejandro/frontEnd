import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { LibroListComponent } from './libro-list/libro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AutorListComponent } from './autor-list/autor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AutorListComponent,
    CategoriaListComponent,
    LibroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }