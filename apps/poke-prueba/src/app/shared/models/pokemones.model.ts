import * as _ from "lodash";
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
    SET = '[Pokemones] Set',
    SELECT = '[Pokemones] Select'
}

export class SetPokemonesListAction implements Action {
    type = PokemonesStateActionTypes.SET;
    constructor(public pokemones: Pokemon[]) {}
}
export class SelectPokemonAction implements Action {
    type = PokemonesStateActionTypes.SELECT;
    constructor(public pokemon: Pokemon) {}
}

export type PokemonesActions = SetPokemonesListAction | SelectPokemonAction;

// Reducer
export function reducerPokemones (
    state: PokemonesState,
    action: PokemonesActions
) : PokemonesState {
    switch (action.type) {
        case PokemonesStateActionTypes.SET: {
            return {
                list: (action as SetPokemonesListAction).pokemones
            };
        }
        case PokemonesStateActionTypes.SELECT: {
            const list = _.cloneDeep([...state.list]);
            list.forEach((pokemon: Pokemon) => {
                if (pokemon.name !== (action as SelectPokemonAction).pokemon.name) {
                    pokemon.selected = false;
                }
            });
            list.map((pokemon: Pokemon) => {
                if (pokemon.name === (action as SelectPokemonAction).pokemon.name) {
                    pokemon.selected = !pokemon.selected;
                }

                return pokemon;
            });

            return {
                ...state,
                list: list
            };
        }
    }

    return state;
}
