import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AutorListComponent } from './autor-list/autor-list.component';
import { LibroListComponent } from './libro-list/libro-list.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { LibroFormComponent } from './libro-form/libro-form.component';
import { FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutorServiceService } from './autor-service.service';
import { LibroServiceService } from './libro-service.service';
import { CategoriaServiceService } from './categoria-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AutorListComponent,
    LibroListComponent,
    CategoriaListComponent,
    AutorFormComponent,
    AutorFormComponent,
    LibroFormComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AutorServiceService, LibroServiceService, CategoriaServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
