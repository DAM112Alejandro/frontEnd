import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AutorService } from './autor-service.service';
import { CategoriaService } from './categoria-service.service';
import { LibroService } from './libro-service';

import { Autor } from './model/autor';
import { Categoria } from './model/categoria';
import { Libro } from './model/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Libreria';
  autors: Autor[];
  categorias: Categoria[];
  libros: Libro[];
  constructor(private router: Router, private autorService: AutorService, private categoriaService: CategoriaService, private librosService: LibroService){}
    getAutors(){
      this.autorService.findAll().subscribe(data => {
        this.autors = data;
      });
    };
      getCategorias(){
        this.categoriaService.findAll().subscribe(data => {
          this.categorias = data;
        });
  };
      getLibros(){
        this.librosService.findAll().subscribe(data => {
          this.libros = data;
        });
      };
  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getAutors();
    })
    this.router.events.subscribe(value => {
      this.getCategorias();
    })
    this.router.events.subscribe(value => {
      this.getLibros();
    })
  }
}