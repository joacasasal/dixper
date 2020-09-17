import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeCardsComponent } from './components/poke-cards/poke-cards.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeDetailsSidebarComponent } from './components/poke-details-sidebar/poke-details-sidebar.component';
import { PokeTypeComponent } from './components/poke-type/poke-type.component';
import { PokeTypesSidebarComponent } from './components/poke-types-sidebar/poke-types-sidebar.component';

// Services
import { PokemonService } from './services/pokemon.service';

const components = [
  PokeCardComponent,
  PokeCardsComponent,
  PokeDetailsComponent,
  PokeDetailsSidebarComponent,
  PokeTypeComponent,
  PokeTypesSidebarComponent
];
const services = [
  PokemonService
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...components],
  exports: [...components],
  providers: [...services]
})
export class SharedModule { }
