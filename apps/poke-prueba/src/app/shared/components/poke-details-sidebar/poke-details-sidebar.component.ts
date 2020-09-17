import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';

import { Pokemon } from '../../models/pokemon.model';

/**
 * Componente que muestra un Sidebar con los Detalles de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-details-sidebar',
  templateUrl: './poke-details-sidebar.component.html',
  styleUrls: ['./poke-details-sidebar.component.scss'],
  animations: [
    trigger(
      'fadeAnim', [
        transition(':enter', [
          style({transform: 'translateX(100%)'}),
          animate('200ms', style({transform: 'translateX(0)'}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)'}),
          animate('200ms', style({transform: 'translateX(100%)'}))
        ])
      ]
    )
  ]
})
export class PokeDetailsSidebarComponent implements OnInit {

  public showDetails: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(state => state.pokemones).subscribe((pokemones) => {
      if (pokemones && pokemones.list && pokemones.list.length > 0) {
        if (pokemones.list.find((pokemon: Pokemon) => pokemon.selected)) {
          this.showDetails = true;
        } else {
          this.showDetails = false;
        }
      }
   });
  }

  ngOnInit(): void {
  }
}
