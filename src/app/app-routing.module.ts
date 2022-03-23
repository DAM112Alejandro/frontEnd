import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorListComponent } from './autor-list/autor-list.component';

import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { LibroListComponent } from './libro-list/libro-list.component';


const routes: Routes = [
  { path: 'autor/all', component: AutorListComponent },
  { path: 'libro/all' , component: LibroListComponent },
  { path: 'categoria/all' , component: CategoriaListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }