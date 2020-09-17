import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';
import { SelectPokemonAction } from '../../models/pokemones.model';

import { TypesConstants } from '../../../constants/types.constant';
import { ProgressConstants } from '../../../constants/progress.constant';

import { Pokemon } from '../../models/pokemon.model';

import { PokemonService } from '../../services/pokemon.service';

/**
 * Componente que musetra la info de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit, OnDestroy {

  private subsStore: Subscription;

  TYPES = TypesConstants.TYPES;

  public progressMaxValue = 200;

  @Input() public pokemonID: Pokemon;
  @Input() public noCard: boolean;
  @Input() public pokemon: Pokemon;

  public isSelected: boolean;

  constructor(
     private store: Store<AppState>,
     public pokemonSrv: PokemonService
  ) {
    this.subsStore = this.store.select(state => state.pokemones.selected).subscribe((pokemonSelected) => {
      if (pokemonSelected && this.pokemon && pokemonSelected.name === this.pokemon.name) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
    });
  }

  ngOnInit(): void {
     this.getPokemonData();
  }

  /**
   * Obtiene los datos del Pokemon del id indicado.
   */
  getPokemonData() {
     if (this.pokemonID && this.pokemonID.url !== undefined) {
      const subsPoke = this.pokemonSrv.getPokemon(this.pokemonID.url).subscribe((pokemon: Pokemon) => {
         if (pokemon) {
           this.pokemon = pokemon;
         }
         subsPoke.unsubscribe();
      });
     }
  }

  /**
   * Obtiene el color de la barra de progreso, según su valor actual.
   * @param progress progreso actual
   */
  getProgressColor(progress: number) {
    if (progress < 50) {
      return ProgressConstants.PROGRESS_NONE;
    } else if (progress >= 50 && progress < this.progressMaxValue / 2) {
      return ProgressConstants.PROGRESS_LOW;
    } if (progress >= this.progressMaxValue / 2 && progress < this.progressMaxValue - 50) {
      return ProgressConstants.PROGRESS_MEDIUM;
    } if (progress >= this.progressMaxValue - 50) {
      return ProgressConstants.PROGRESS_HIGH;
    }
  }

  /**
   * Selecciona el pokemon.
   */
  selectPokemon() {
    this.store.dispatch(new SelectPokemonAction(this.pokemon));
  }

  // ---
  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
  }
}
