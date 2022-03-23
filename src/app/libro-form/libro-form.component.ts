import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroServiceService } from '../libro-service.service';
import { Libro } from '../model/libro';



@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent {

  libro: Libro;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private libroServiceService: LibroServiceService) {
    this.libro = new Libro();
  }

  public  

  
}
