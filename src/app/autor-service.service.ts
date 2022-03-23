import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './model/autor';


@Injectable({
  providedIn: 'root'
  })
export class AutorServiceService {


  private autorUrl: string;

  constructor(private http: HttpClient) {
    this.autorUrl = 'http://localhost:8080/autor';
  }

  public findAll(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.autorUrl}/all`);
  }

  public save(autor: Autor) {
    return this.http.post<Autor>(this.autorUrl, autor);
  }
}