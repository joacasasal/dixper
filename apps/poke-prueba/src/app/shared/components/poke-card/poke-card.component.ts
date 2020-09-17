import { Component, Input, OnInit } from '@angular/core';

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
export class PokeCardComponent implements OnInit {

   TYPES = TypesConstants.TYPES;

  public progressMaxValue = 200;

  @Input() public pokemonID: Pokemon;
  @Input() public noCard: boolean;

  public pokemon: Pokemon;

  constructor(
     private store: Store<AppState>,
     public pokemonSrv: PokemonService
  ) {
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
   this.store.dispatch(new SelectPokemonAction(this.pokemonID));
  }
}
