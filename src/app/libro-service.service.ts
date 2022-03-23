import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from './model/libro';
import { Observable } from 'rxjs';


@Injectable()
export class LibroServiceService {

  private libroUrl: string;

  constructor(private http: HttpClient) {
    this.libroUrl = 'http://localhost:8080/libro';
  }

  public findAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.libroUrl}/all`);
  }
  public updatelibro(libro: Libro): Observable<Libro>{
    return this.http.put<Libro>(`${this.libroUrl}/update`,Libro)
  }
  public deletelibro(idLibro: number): Observable<void>{
    return this.http.delete<void>(`${this.libroUrl}/delete/${idLibro}`);
  }

}