import * as _ from "lodash";
import { Action } from "@ngrx/store";

import { Pokemon, PokeType } from "./pokemon.model";

export interface PokemonesState {
    list: Pokemon[];
    type: PokeType;
}

export const inicializePokemonesState = () => {
    return {
        list: [],
        type: null
    }
}

// Actions
export enum PokemonesStateActionTypes {
    SET = '[Pokemones]SET',
    SELECT = '[Pokemones]SELECT',
    SELECT_TYPE = '[Pokemones]SELECT_TYPE'
}

export class SetPokemonesListAction implements Action {
    type = PokemonesStateActionTypes.SET;
    constructor(public pokemones: Pokemon[], public pokeType: PokeType) {}
}
export class SelectPokemonAction implements Action {
    type = PokemonesStateActionTypes.SELECT;
    constructor(public pokemon: Pokemon) {}
}
export class SelectPokemonTypeAction implements Action {
    type = PokemonesStateActionTypes.SELECT_TYPE;
    constructor(public pokeType: PokeType) {}
}

export type PokemonesActions =
    SetPokemonesListAction |
    SelectPokemonAction |
    SelectPokemonTypeAction;

// Reducer
export function reducerPokemones (
    state: PokemonesState,
    action: PokemonesActions
) : PokemonesState {
    switch (action.type) {
        case PokemonesStateActionTypes.SET: {
            return {
                list: (action as SetPokemonesListAction).pokemones,
                type: (action as SetPokemonesListAction).pokeType
            };
        }
        case PokemonesStateActionTypes.SELECT: {
            const list = [...state.list];
            list.forEach((pokemon: Pokemon) => {
                if (pokemon.name !== (action as SelectPokemonAction).pokemon.name) {
                    pokemon.selected = false;
                    // return {
                    //     ...pokemon,
                    //     selected: false
                    // };
                }
            });
            list.find((pokemon: Pokemon) => {
                if (pokemon.name === (action as SelectPokemonAction).pokemon.name) {
                    pokemon.selected = !pokemon.selected;
                    // return {
                    //     ...pokemon,
                    //     selected: !pokemon.selected
                    // };
                }
            });

            return {
                ...state,
                list
            };
        }
        case PokemonesStateActionTypes.SELECT_TYPE: {
            return {
                ...state,
                type: (action as SelectPokemonTypeAction).pokeType
            }
        }
        default:
            break;
    }

    return state;
}
