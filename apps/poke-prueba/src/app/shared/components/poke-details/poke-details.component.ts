import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';

import { Pokemon } from '../../models/pokemon.model';

/**
 * Componente que muestra los Detalles de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit , OnDestroy {

  private subsStore: Subscription;

  public pokemon: Pokemon;

  constructor(private store: Store<AppState>) {
    this.subsStore = this.store.select(state => state.pokemones).subscribe((pokemones) => {
      if (pokemones && pokemones.list && pokemones.list.length > 0) {
        this.pokemon = pokemones.list.find((pokemon: Pokemon) => pokemon.selected);
      }
    });
 }

  ngOnInit(): void {
  }

  // ---

  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
   }
}
