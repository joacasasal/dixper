import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../app.module';

import { TypesConstants } from '../../../constants/types.constant';

import { SelectPokemonTypeAction } from '../../models/pokemones.model';

/**
 * Componente que muestra un Botón con el Tipo de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.scss']
})
export class PokeTypeComponent implements OnInit {

  private subsState: Subscription;

  TYPES = TypesConstants.TYPES;

  @Input() public type: any;

  public typeSelected: boolean;

  constructor(private store: Store<AppState>) {
    this.subsState = this.store.select(state => state.pokemones.type).subscribe((type) => {
      if (type && type.name !== this.type.name) {
        this.typeSelected = false;
      }
    });
  }

  ngOnInit(): void {
  }

  /**
   * Selecciona un tipo de Pokémon.
   */
  selectType() {
    this.typeSelected = !this.typeSelected;

    this.store.dispatch(new SelectPokemonTypeAction(this.typeSelected ? this.type : null));
  }
}
