import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';

import { TypesConstants } from '../../../constants/types.constant';

/**
 * Componente que muestra un Botón con el Tipo de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.scss']
})
export class PokeTypeComponent implements OnInit {

  TYPES = TypesConstants.TYPES;

  @Input() public type: any;

  public typeSelected: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  /**
   * Selecciona un tipo de Pokémon.
   */
  selectType() {
    this.typeSelected = !this.typeSelected
  }
}
