import { Component, OnInit } from '@angular/core';
import { LibroServiceService } from '../libro-service.service';

import { Libro } from '../model/libro';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  libros: Libro[];

  constructor(private libroServiceService: LibroServiceService) {
  }

  ngOnInit() {
    this.libroServiceService.findAll().subscribe(data => {
      this.libros = data;
    });
  }
}
