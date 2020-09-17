import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';
import { SetPokemonesListAction } from '../../models/pokemones.model';

import { Pokemon, PokemonResponse, PokemonTypeResponse, PokeType } from '../../models/pokemon.model';

import { PokemonService } from '../../services/pokemon.service';

/**
 * Componente que muestra el Listado de Pokémones.
 */
@Component({
  selector: 'dixper-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.scss']
})
export class PokeCardsComponent implements OnInit, OnDestroy {

  private subsStore: Subscription;
  private subsState: Subscription;

  public pokemones: Pokemon[];

  constructor(
    private store: Store<AppState>,
    public pokemonSrv: PokemonService
  ) {
    this.subsState = this.store.select(state => state.pokemones.type).subscribe((type) => {
      if (type) {
        this.getPokemones(type);
      } else {
        this.getPokemones();
      }
    });
  }

  ngOnInit(): void {
    this.getPokemones();
  }

  /**
   * Obtiene los Pokémons del tipo seleccionado.
   */
  getPokemones(type?: PokeType) {
    if (!type) { // Todos
      const subsPoke = this.pokemonSrv.getPokemones().subscribe((data: PokemonResponse) => {
        if (!data.results) {
          data.results = [];
        }
        this.deselectAll(data.results);
        this.store.dispatch(new SetPokemonesListAction(data.results, type));

        this.pokemones = data.results;

        subsPoke.unsubscribe();
      });
    } else { // Por tipo
      const subsPoke = this.pokemonSrv.getPokemonesByType(type).subscribe((data: PokemonTypeResponse) => {
        let pokemonTypeData = [];
        if (!data.pokemon) {
          data.pokemon = [];
        } else {
          data.pokemon.map((pokemon) => {
            pokemonTypeData = [...pokemonTypeData, pokemon.pokemon];
          });
        }
        this.deselectAll(pokemonTypeData);
        this.store.dispatch(new SetPokemonesListAction(pokemonTypeData, type));

        this.pokemones = pokemonTypeData;
  
        subsPoke.unsubscribe();
      });
    }
  }

  /**
   * Deselecciona todos los Pokémones.
   * @param pokemones datos de los pokemones
   */
  deselectAll(pokemones: Pokemon[]) {
    if (pokemones && pokemones.length > 0) {
      pokemones.forEach((pokemon) => {
         pokemon.selected = false;
      });
    }
  }

  // ---

  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
    if (this.subsState) { this.subsState.unsubscribe(); }
  }
}
