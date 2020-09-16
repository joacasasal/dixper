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

    selected?: boolean;
    
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.sprites = data.sprites ? data.sprites : [];
        this.stats = data.stats ? data.stats : [];
        this.types = data.types ? data.types : [];

        this.selected = data.selected;
    }
}
