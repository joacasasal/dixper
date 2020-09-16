export class Pokemon {
    id: string;
    states?: any[];

    selected?: boolean;
    
    constructor(data: any) {
        this.id = data.id;
        this.states = data.states ? data.states : [];

        this.selected = data.selected;
    }
}
