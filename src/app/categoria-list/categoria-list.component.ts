import { Component, OnInit } from '@angular/core';
import { CategoriaServiceService } from '../categoria-service.service';
import { Categoria } from '../model/categoria';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias!: Categoria[];

  constructor(private categoriaServiceService: CategoriaServiceService) {
  }

  ngOnInit() {
    this.categoriaServiceService.findAll().subscribe(data => {
      this.categorias = data;
    });
  }
}
