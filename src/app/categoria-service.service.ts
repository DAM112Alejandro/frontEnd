import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './model/categoria';


@Injectable({
providedIn: 'root'
})
export class CategoriaServiceService {

  private categoriaUrl: string;

  constructor(private http: HttpClient) {
    this.categoriaUrl = 'http://localhost:8080/categoria';
  }

  public findAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.categoriaUrl}/all`);
  }
  public save(categoria: Categoria) {
    return this.http.post<Categoria>(this.categoriaUrl, categoria);
  }
  
}