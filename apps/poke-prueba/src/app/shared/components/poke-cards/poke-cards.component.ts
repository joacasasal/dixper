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

  public pokemonesAll: Pokemon[];
  public pokemones: Pokemon[];

  public isLoading: boolean;

  // Pag
  public actualPag = 1;

  constructor(
    private store: Store<AppState>,
    public pokemonSrv: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.getPokemones();
  }

  /**
   * Obtiene los Pokémons del tipo seleccionado.
   */
  getPokemones(type?: PokeType) {
    this.isLoading = true;
    window.scroll(0, 0);
    if (!type) { // Todos
      const subsPoke = this.pokemonSrv.getPokemones().subscribe((data: PokemonResponse) => {
        if (!data.results) {
          data.results = [];
        }
        this.store.dispatch(new SetPokemonesListAction(data.results, type));

        this.pokemonesAll = data.results;
        this.pokemones = data.results.slice(0, 6 * this.actualPag);

        if (!this.subsState) {
          this.subsState = this.store.select(state => state.pokemones.type).subscribe((pokeType) => {
            if (pokeType !== undefined) {
              if (pokeType) {
                this.getPokemones(pokeType);
              } else {
                this.getPokemones();
              }
            }
          });
        }

        this.isLoading = false;
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
        this.store.dispatch(new SetPokemonesListAction(pokemonTypeData, type));

        this.pokemones = pokemonTypeData;
  
        this.isLoading = false;
        subsPoke.unsubscribe();
      });
    }
  }

  onScroll($event: any) {
    console.log($event);
  };

  // ---

  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
    if (this.subsState) { this.subsState.unsubscribe(); }
  }
}
