import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Pokemon, PokemonResponse, PokemonTypeResponse, PokemonTypesResponse, PokeType } from '../models/pokemon.model';

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
   */
  public getPokemones(): Observable<PokemonResponse> {
    const params = {
      // limit: '6' // Pagina el número de pokemones
    };

    return this.http.get<PokemonResponse>(this.apiUrl + 'pokemon', { params, observe: 'response' }).pipe(
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
    const params = {
      limit: '6'
    };

    return this.http.get<PokemonTypeResponse>(type.url, { params, observe: 'response' }).pipe(
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
    return this.http.get<Pokemon>(pokemonUrl);
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
