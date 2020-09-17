import { Component, OnInit } from '@angular/core';

import { PokemonTypesResponse, PokeType } from '../../models/pokemon.model';

import { PokemonService } from '../../services/pokemon.service';

/**
 * Componente que muestra un SideBar con los Tipos de Pokémon.
 */
@Component({
  selector: 'dixper-poke-types-sidebar',
  templateUrl: './poke-types-sidebar.component.html',
  styleUrls: ['./poke-types-sidebar.component.scss']
})
export class PokeTypesSidebarComponent implements OnInit {

  public pokeTypes: PokeType[];

  constructor(
     public pokemonSrv: PokemonService
  ) {
  }

  ngOnInit(): void {
     this.getPokemonTypes();
  }

  /**
   * Obtiene los tipos de Pokémon.
   */
  getPokemonTypes() {
   const subsPoke = this.pokemonSrv.getPokemonesTypes().subscribe((data: PokemonTypesResponse) => {
      if (!data.results) {
        data.results = [];
      }
      this.pokeTypes = data.results;

      subsPoke.unsubscribe();
    });
  }
}
