import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';

import { Pokemon } from '../../shared/models/pokemon.model';

/**
 * Vista principal.
 */
@Component({
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

  public showDetails = false;

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

  ngOnInit() {
  }
}
