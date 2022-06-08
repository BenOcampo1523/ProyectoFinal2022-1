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
      tap(_ => this.log('Recuperando datos de la BD.')),
      catchError(this.handleError<Animales[]>('getAnimales', []))
    );
  }

  getAnimal(id:number): Observable<Animales>{
    const url = `${this.animalesURL}/${id}`;
    return this.http.get<Animales>(url).pipe(
      tap(_ => this.log(`Recuperando datos de ID=${id}`)),
      catchError(this.handleError<Animales>(`getAnimal ID=${id}`))
    );
  }

  addAnimal(animal:Animales): Observable<Animales>{
    return this.http.post<Animales>(this.animalesURL,animal,this.httpOptions).pipe(
      tap((animal: Animales) => this.log(`Añadido animal con ID=${animal.id_animal}`)),
      catchError(this.handleError<Animales>('addAnimal'))
    );
  }


  updateAnimal(id:number, animal:Animales): Observable<any>{
    const url = `${this.animalesURL}/${id}`;
    return this.http.put(url, animal, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${id}`)),
      catchError(this.handleError<any>('updateTaqueria')));
  }


  /*
  updateAnimal(animal:Animales): Observable<any>{
    return this.http.put(this.animalesURL, animal, this.httpOptions).pipe(
      tap(_ => this.log(`Actualizado los datos con ID=${animal.id_animal}`)),
      catchError(this.handleError<any>('updateAnimal')));
  }
  */

  deleteAnimal(id:number):Observable<any>{
    const url = `${this.animalesURL}/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(_ => this.log(`Eliminado animal con ID ${id}`)),
      catchError(this.handleError<any>(`deleteAnimal ID ${id}`))
    );
  }


  // Métodos esenciales
  private log(message: string) {
    console.log(`AnimalService: ${message}`);
  }

  private handleError<T>(operacion = 'operación', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operacion} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
