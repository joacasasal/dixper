import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que muestra un Botón con el Tipo de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-type',
  templateUrl: './poke-type.component.html',
  styleUrls: ['./poke-type.component.scss']
})
export class PokeTypeComponent implements OnInit {

  @Input() public type: any;
  @Input() public typeSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
