import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { environment } from '../../../environment/environment';

import { Hero, PaginatedSuperheroes } from '../interfaces/PaginatedSuperheroes.interface';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private baseUrl = environment.serviceBaseUrl;

  private http = inject(HttpClient);

  constructor() { }

  getPaginatedHeroes = (page: number = 1, size: number = 10): Observable<PaginatedSuperheroes> => {
    return this.http.get<PaginatedSuperheroes>(`${this.baseUrl}/heroes?size=${size}&page=${page}`)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }

  findSuperheroById = (heroId: number): Observable<Hero> => {
    return this.http.get<Hero>(`${this.baseUrl}/hero?id=${heroId}`)
      .pipe(
        catchError((error) => throwError(() => error))
      )
  }
}
