import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.module';

import { SelectPokemonAction } from '../../models/pokemones.model';

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
export class PokeDetailsSidebarComponent implements OnInit, OnDestroy {

  private subsStore: Subscription;

  public showDetails: boolean;

  constructor(
    private store: Store<AppState>,
    private elementRef: ElementRef
  ) {
    this.subsStore = this.store.select(state => state.pokemones.selected).subscribe((pokemonSelected) => {
      if (pokemonSelected !== null && this.showDetails !== undefined) {
        this.showDetails = true;
      } else {
        this.showDetails = false;
      }
   });
  }

  ngOnInit(): void {
  }

  /**
   * Oculta el componente al hacer click fuera de él, mientras no sea en otro pokémon.
   * @param event evento de click
   */
  @HostListener('document:mousedown', ['$event'])
  closeSidebar(event?: any): void {
     if (this.showDetails
      && (!event || !this.elementRef.nativeElement.contains(event.target) && (!event.srcElement || event.srcElement.id !== 'poke-card'))) {
      this.store.dispatch(new SelectPokemonAction(null));
     }
  }

  // ---

  ngOnDestroy(): void {
    if (this.subsStore) { this.subsStore.unsubscribe(); }
  }
}
