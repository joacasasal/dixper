/**
 * Modelo de un Pokémon.
 */
export class Pokemon {
    id?: number;
    name: string;
    url?: string;
    sprites?: any;
    stats?: any[];
    types?: any[];
    abilities?: any[];
    base_experience?: number;
    forms?: any[];
    game_indices?: any[];
    height?: number;
    held_items?: any[];
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: any[];
    order?: number;
    species?: any;
    weight?: number;
    
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.sprites = data.sprites ? data.sprites : [];
        this.stats = data.stats ? data.stats : [];
        this.types = data.types ? data.types : [];
    }
}

/**
 * Modelo de un Tipo de Pokémon.
 */
export class PokeType {
    name: string;
    url: string;
}

/**
 * Modelo de los params de la PokeAPI.
 */
export class PokemonParams {
    limit?: string;
    offset?: string;
}

/**
 * Respuesta de los Pokemones.
 */
export class PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

/**
 * Respuesta de los tipos de Pokemones.
 */
export class PokemonTypesResponse {
    count: number;
    next: string;
    previous: string;
    results: PokeType[];
}

/**
 * Respuesta de los Pokemones de un tipo.
 */
export class PokemonTypeResponse {
    id: number;
    damage_relations: any;
    game_indices: any;
    generation: string;
    move_damage_class: any;
    moves: any[];
    name: string;
    names: any[];
    pokemon: any[];
}