import { Autor } from "./autor";
import { Categoria } from "./categoria";


export class Libro {
    id: number;
    titulo: string;
    edicion: number;
    id_autor: Autor;
    id_categoria: Categoria;   
}
