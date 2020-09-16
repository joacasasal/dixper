import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';
import { SetPokemonesListAction } from '../../models/pokemones.model';

import { Pokemon } from '../../models/pokemon.model';

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

  public pokemones: Pokemon[];

  constructor(private store: Store<AppState>) {
     this.subsStore = this.store.select(state => state.pokemones).subscribe((pokemones) => {
        this.pokemones = pokemones.list;
     });
  }

  ngOnInit(): void {
    this.getpokemones();
  }

  /**
   * Obtiene los Pokémons del tipo seleccionado.
   */
  getpokemones() {
    // MOCK
    this.pokemones = [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
      }
    ];
    // this.pokemones = [
    //   {
    //     "name": "bulbasaur",
    //     "url": "https://pokeapi.co/api/v2/pokemon/1/"
    //   },
    //   {
    //     "name": "ivysaur",
    //     "url": "https://pokeapi.co/api/v2/pokemon/2/"
    //   },
    //   {
    //     "name": "venusaur",
    //     "url": "https://pokeapi.co/api/v2/pokemon/3/"
    //   },
    //   {
    //     "name": "charmander",
    //     "url": "https://pokeapi.co/api/v2/pokemon/4/"
    //   },
    //   {
    //     "name": "charmeleon",
    //     "url": "https://pokeapi.co/api/v2/pokemon/5/"
    //   },
    //   {
    //     "name": "charizard",
    //     "url": "https://pokeapi.co/api/v2/pokemon/6/"
    //   }
    // ];
    // end MOCK

    if (this.pokemones && this.pokemones.length > 0) {
      this.pokemones.forEach((pokemon) => {
         pokemon.selected = false;
      });
    }

    this.store.dispatch(new SetPokemonesListAction(this.pokemones));
  }

  // ---

  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
   }
}
