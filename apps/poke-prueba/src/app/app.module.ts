import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { inicializePokemonesState, PokemonesState, reducerPokemones } from './shared/models/pokemones.model';

import { SharedModule } from './shared/shared.module';

// Services

// Components

const components = [
];
const services = [
];

// Redux Config
export interface AppState {
  pokemones: PokemonesState
}
const reducers: ActionReducerMap<AppState> = {
  pokemones: reducerPokemones
};
const reducersInitialState = {
  pokemones: inicializePokemonesState()
};
// end Redux Config

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState }),
    EffectsModule.forRoot([]),
    SharedModule
  ],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
