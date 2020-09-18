import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';
import { SetPokemonesListAction } from '../../models/pokemones.model';

import { Pokemon, PokemonResponse, PokemonTypeResponse, PokeType } from '../../models/pokemon.model';

import { PokemonService } from '../../services/pokemon.service';

/**
 * Componente que muestra el Listado de Pokémones.
 */
@Component({
  selector: 'dixper-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.scss']
})
export class PokeCardsComponent implements OnInit, OnDestroy {

  @ViewChild('pokeCards') private scrollContainer: ElementRef;

  private subsStore: Subscription;
  private subsState: Subscription;
  private subjPoke = new Subject();

  public pokemonesAll: Pokemon[] = [];
  public pokemones: Pokemon[] = [];
  public pokeTypeSelected: PokeType;
  private maxPokemones: number;

  public isLoading: boolean;

  // Pag
  public actualPag = 1;
  public delaySeconds = 2;

  constructor(
    private store: Store<AppState>,
    public pokemonSrv: PokemonService
  ) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.resetData();
    this.getPokemones();
  }

  /**
   * Resetea los datos.
   */
  resetData() {
    this.actualPag = 1;
    this.pokemonesAll = [];
    this.pokemones = [];
  }

  /**
   * Obtiene los Pokémons del tipo seleccionado.
   */
  getPokemones(type?: PokeType) {
    this.isLoading = true;

    if (!type) { // Todos
      this.pokeTypeSelected = type;

      const subsPoke = this.pokemonSrv.getPokemones(6, 6 * (this.actualPag - 1))
      .subscribe((data: PokemonResponse) => {
        if (!type) { // Se comprueba que no se haya seleccionado un tipo mientras se procesa
          if (!data.results) {
            data.results = [];
          }
          this.maxPokemones = data.count;
          this.store.dispatch(new SetPokemonesListAction(data.results, type));

          this.pokemonesAll = this.pokemonesAll.concat(...data.results);
          this.pokemones = this.pokemones.concat(...data.results);

          if (!this.subsState) {
            this.subToState();
          }
          this.isLoading = false;
        }
        subsPoke.unsubscribe();
      });
    } else { // Por tipo
      if (!this.pokeTypeSelected || this.pokeTypeSelected !== type) { // Obtiene los pokemones del tipo
        window.scroll(0, 0);
        this.pokeTypeSelected = type;

        const subsPoke = this.pokemonSrv.getPokemonesByType(type)
          .subscribe((data: PokemonTypeResponse) => {
            if (type === this.pokeTypeSelected) {  // Se comprueba que no se haya cambiado de tipo mientras se procesa
              let pokemonTypeData = [];
              if (!data.pokemon) {
                data.pokemon = [];
              } else {
                data.pokemon.map((pokemon) => {
                  pokemonTypeData = [...pokemonTypeData, pokemon.pokemon];
                });
              }
              this.store.dispatch(new SetPokemonesListAction(pokemonTypeData, type));
      
              this.pokemonesAll = pokemonTypeData;
              this.pokemones = pokemonTypeData.slice(0, 6 * this.actualPag);
        
              this.isLoading = false;
            }
            subsPoke.unsubscribe();
        });
      } else { // Cambia de página para mostrar los 6 próximos pokemones
        setTimeout(() => {
          this.pokemones = this.pokemonesAll.slice(0, 6 * this.actualPag);

          this.isLoading = false;
        }, this.delaySeconds * 1000);
      }
    }
  }

  /**
   * Subscripción al cambio de Tipo de Pokemon seleccionado.
   */
  subToState() {
    this.subsState = this.store.select(state => state.pokemones.type).subscribe((pokeType) => {
      if (pokeType !== undefined) {
        this.resetData();
        if (pokeType) {
          this.getPokemones(pokeType);
        } else {
          this.getPokemones();
        }
      }
    });
  }

  /**
   * Cambia de página al hacer scroll hacia abajo.
   * @param event evento de scroll
   */
  @HostListener('mousewheel', ['$event'])
  onMousewheel(event: any) {
    if (this.scrollContainer && event.wheelDelta < 0) {
      if(!this.isLoading) {
        if (this.pokemonesAll.length !== this.pokemones.length || (!this.pokeTypeSelected && this.pokemones.length < this.maxPokemones)) {
          this.actualPag++;
          this.getPokemones(this.pokeTypeSelected);
        }
      }
    }
  }

  // ---

  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
    if (this.subsState) { this.subsState.unsubscribe(); }
  }
}
