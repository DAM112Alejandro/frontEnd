import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorServiceService } from '../autor-service.service';
import { Autor } from '../model/autor';


@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.css']
})
export class AutorFormComponent {

  autor: Autor;

  constructor(
    private route: ActivatedRoute, 
      private router: Router,   
        private autorServiceService: AutorServiceService) {
    this.autor = new Autor();
  }

  onSubmit() {
    this.autorServiceService.save(this.autor).subscribe(result => this.gotoAutorList());
  } 
  gotoAutorList() {
    this.router.navigate(['/autor']);
  }
}
