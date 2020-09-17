import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon, PokemonResponse, PokemonTypeResponse, PokeType } from '../models/pokemon.model';

/**
 * Servicio de PokeAPI.
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Obtiene todos los pokemones, pudiendo paginar.
   */
  public getPokemones(): Observable<PokemonResponse> {
    return this.httpClient.get<PokemonResponse>(this.apiUrl + 'pokemon');
  }

  /**
   * Obtiene todos los pokemones de un tipo, pudiendo paginar.
   * @param type tipo de pokémon
   */
  public getPokemonesByType(type?: PokeType): Observable<PokemonTypeResponse> {
    return this.httpClient.get<PokemonTypeResponse>(type.url);
  }

  /**
   * Obtiene un pokémon.
   * @param pokemonUrl url del pokemon
   */
  public getPokemon(pokemonUrl: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(pokemonUrl);
  }
}
