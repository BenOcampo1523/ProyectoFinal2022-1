import { Injectable } from "@angular/core";
import { Animales } from "./animales";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AnimalesService {
  private animalesURL = 'http://localhost:3000/api/v1/animales';
  constructor(private http:HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAnimales(): Observable<Animales[]>{
    return this.http.get<Animales[]>(this.animalesURL).pipe(
      tap(_ => this.log('Obtenido datos de animal')),
      catchError(this.handleError<Animales[]>('getAnimales', []))
    );
  }

  addAnimal(animal:Animales): Observable<Animales>{
    return this.http.post<Animales>(this.animalesURL,animal,this.httpOptions).pipe(
      tap((animal: Animales) => this.log(`Añadido animal con id=${animal.id_animal}`)),
      catchError(this.handleError<Animales>('addAnimal'))
    );
  }

  updateAnimal(animal:Animales): Observable<any>{
    return this.http.put(this.animalesURL, animal, this.httpOptions).pipe(
      tap(_ => this.log(`Actualizado ID ${animal.id_animal}`)),
      catchError(this.handleError<any>('updateAnimal'))
    );
  }

  deleteAnimal(id:number):Observable<any>{
    const url = `${this.animalesURL}/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(_ => this.log(`Eliminado animal con ID ${id}`)),
      catchError(this.handleError<any>(`deleteAnimal ID ${id}`))
    );
  }


  // Métodos esenciales
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }

  private handleError<T>(operacion = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operacion} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
