import { Component, OnInit } from '@angular/core';
import { AutorServiceService } from '../autor-service.service';
import { Autor } from '../model/autor';


@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {

  autors: Autor[];

  constructor(private autorServiceService: AutorServiceService) {
  }

  ngOnInit() {
    this.autorServiceService.findAll().subscribe(data => {
      this.autors = data;
    });
  }
}
