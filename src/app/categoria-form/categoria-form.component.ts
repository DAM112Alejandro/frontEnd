import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaServiceService } from '../categoria-service.service';
import { Categoria } from '../model/categoria';



@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {

  categoria: Categoria;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private categoriaServiceService: CategoriaServiceService) {
    this.categoria = new Categoria();
  }

  onSubmit() {
    this.categoriaServiceService.save(this.categoria).subscribe(result => this.gotoCategoriaList());
  } 
  gotoCategoriaList() {
    this.router.navigate(['/categoria/add']);
  }
}

