import { Component, Input, OnInit } from '@angular/core';

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
  @Input() public typeSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
