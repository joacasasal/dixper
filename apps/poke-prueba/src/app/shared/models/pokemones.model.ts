import { Action } from "@ngrx/store";

import { Pokemon } from "./pokemon.model";

export interface PokemonesState {
    list: Pokemon[];
}

export const inicializePokemonesState = () => {
    return {
        list: []
    }
}

// Actions
export enum PokemonesStateActionTypes {
    SELECT = '[Pokemones] Select'
}

export class SelectPokemonAction implements Action {
    type = PokemonesStateActionTypes.SELECT;
    constructor(public pokemon: Pokemon) {}
}

export type PokemonesActions = SelectPokemonAction;

// Reducer
export function reducerPokemones (
    state: PokemonesState,
    action: PokemonesActions
) : PokemonesState {
    switch (action.type) {
        case PokemonesStateActionTypes.SELECT: {
            state.list.forEach(pokemon => pokemon.selected = false);
            const pokemonSel = (action as SelectPokemonAction).pokemon;
            pokemonSel.selected = true;
        }
    }

    return state;
}
