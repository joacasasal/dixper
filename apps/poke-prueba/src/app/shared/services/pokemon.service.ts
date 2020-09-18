import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError, delay, debounceTime } from 'rxjs/operators';

import { Pokemon, PokemonParams, PokemonResponse, PokemonTypeResponse, PokemonTypesResponse, PokeType } from '../models/pokemon.model';

/**
 * Servicio de PokeAPI.
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  /**
   * Obtiene todos los pokemones, pudiendo paginar.
   * @param numPokes número de pokemones a obtener
   * @param offet número de pokemones ya obtenidos
   */
  public getPokemones(numPokes: number, offset?: number): Observable<PokemonResponse> {
    const params = {
      limit: numPokes ? numPokes.toString() : '6', // Pagina el número de pokemones
      offset: offset.toString() // Desde qué número obtener datos
    };

    return this.http.get<PokemonResponse>(this.apiUrl + 'pokemon', { params, observe: 'response' }).pipe(
      debounceTime(2000),
      delay(2000),
      map(data => {
        if (data && data.body) {
          return data.body;
        }
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  /**
   * Obtiene todos los pokemones de un tipo, pudiendo paginar.
   * @param type tipo de pokémon
   */
  public getPokemonesByType(type?: PokeType): Observable<PokemonTypeResponse> {
    return this.http.get<PokemonTypeResponse>(type.url, { observe: 'response' }).pipe(
      debounceTime(2000),
      delay(2000),
      map(data => {
        if (data && data.body) {
          return data.body;
        }
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  /**
   * Obtiene un pokémon.
   * @param pokemonUrl url del pokemon
   */
  public getPokemon(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl).pipe(
      map(data => {
        return data;
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  /**
   * Obtiene los tipos de Pokémon.
   */
  public getPokemonesTypes(): Observable<PokemonTypesResponse> {
    return this.http.get<PokemonTypesResponse>(this.apiUrl + 'type', { observe: 'response' }).pipe(
      map(data => {
        if (data && data.body) {
          return data.body;
        }
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
