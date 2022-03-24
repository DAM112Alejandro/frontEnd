import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../categoria-service.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: Categoria[];
  
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(data =>{
      this.categorias = data;
    })
  }

}