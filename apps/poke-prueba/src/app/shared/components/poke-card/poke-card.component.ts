import { Component, Input, OnInit } from '@angular/core';

import { ProgressConstants } from '../../../constants/progress.constant';

/**
 * Componente que musetra la info de un Pokémon.
 */
@Component({
  selector: 'dixper-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  public progressMaxValue = 200;

  @Input() public noCard: boolean;

  public pokemon: any;

  constructor() { }

  ngOnInit(): void {
    // MOCK
    this.pokemon = {
      "abilities": [
         {
            "ability": {
               "name": "pressure",
               "url": "https://pokeapi.co/api/v2/ability/46/"
            },
            "is_hidden": false,
            "slot": 1
         },
         {
            "ability": {
               "name": "unnerve",
               "url": "https://pokeapi.co/api/v2/ability/127/"
            },
            "is_hidden": true,
            "slot": 3
         }
      ],
      "base_experience": 306,
      "forms": [
         {
            "name": "mewtwo",
            "url": "https://pokeapi.co/api/v2/pokemon-form/150/"
         }
      ],
      "game_indices": [
         {
            "game_index": 131,
            "version": {
               "name": "red",
               "url": "https://pokeapi.co/api/v2/version/1/"
            }
         },
         {
            "game_index": 131,
            "version": {
               "name": "blue",
               "url": "https://pokeapi.co/api/v2/version/2/"
            }
         },
         {
            "game_index": 131,
            "version": {
               "name": "yellow",
               "url": "https://pokeapi.co/api/v2/version/3/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "gold",
               "url": "https://pokeapi.co/api/v2/version/4/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "silver",
               "url": "https://pokeapi.co/api/v2/version/5/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "crystal",
               "url": "https://pokeapi.co/api/v2/version/6/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "ruby",
               "url": "https://pokeapi.co/api/v2/version/7/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "sapphire",
               "url": "https://pokeapi.co/api/v2/version/8/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "emerald",
               "url": "https://pokeapi.co/api/v2/version/9/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "firered",
               "url": "https://pokeapi.co/api/v2/version/10/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "leafgreen",
               "url": "https://pokeapi.co/api/v2/version/11/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "diamond",
               "url": "https://pokeapi.co/api/v2/version/12/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "pearl",
               "url": "https://pokeapi.co/api/v2/version/13/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "platinum",
               "url": "https://pokeapi.co/api/v2/version/14/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "heartgold",
               "url": "https://pokeapi.co/api/v2/version/15/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "soulsilver",
               "url": "https://pokeapi.co/api/v2/version/16/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "black",
               "url": "https://pokeapi.co/api/v2/version/17/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "white",
               "url": "https://pokeapi.co/api/v2/version/18/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "black-2",
               "url": "https://pokeapi.co/api/v2/version/21/"
            }
         },
         {
            "game_index": 150,
            "version": {
               "name": "white-2",
               "url": "https://pokeapi.co/api/v2/version/22/"
            }
         }
      ],
      "height": 20,
      "held_items": [],
      "id": 150,
      "is_default": true,
      "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/150/encounters",
      "moves": [
         {
            "move": {
               "name": "mega-punch",
               "url": "https://pokeapi.co/api/v2/move/5/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "pay-day",
               "url": "https://pokeapi.co/api/v2/move/6/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "fire-punch",
               "url": "https://pokeapi.co/api/v2/move/7/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "ice-punch",
               "url": "https://pokeapi.co/api/v2/move/8/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "thunder-punch",
               "url": "https://pokeapi.co/api/v2/move/9/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "mega-kick",
               "url": "https://pokeapi.co/api/v2/move/25/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "headbutt",
               "url": "https://pokeapi.co/api/v2/move/29/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "body-slam",
               "url": "https://pokeapi.co/api/v2/move/34/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "take-down",
               "url": "https://pokeapi.co/api/v2/move/36/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "double-edge",
               "url": "https://pokeapi.co/api/v2/move/38/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "disable",
               "url": "https://pokeapi.co/api/v2/move/50/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "flamethrower",
               "url": "https://pokeapi.co/api/v2/move/53/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "mist",
               "url": "https://pokeapi.co/api/v2/move/54/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 75,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 75,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "water-gun",
               "url": "https://pokeapi.co/api/v2/move/55/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "ice-beam",
               "url": "https://pokeapi.co/api/v2/move/58/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "blizzard",
               "url": "https://pokeapi.co/api/v2/move/59/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "bubble-beam",
               "url": "https://pokeapi.co/api/v2/move/61/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "hyper-beam",
               "url": "https://pokeapi.co/api/v2/move/63/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "submission",
               "url": "https://pokeapi.co/api/v2/move/66/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "low-kick",
               "url": "https://pokeapi.co/api/v2/move/67/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "counter",
               "url": "https://pokeapi.co/api/v2/move/68/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "seismic-toss",
               "url": "https://pokeapi.co/api/v2/move/69/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "strength",
               "url": "https://pokeapi.co/api/v2/move/70/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "solar-beam",
               "url": "https://pokeapi.co/api/v2/move/76/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "thunderbolt",
               "url": "https://pokeapi.co/api/v2/move/85/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "thunder-wave",
               "url": "https://pokeapi.co/api/v2/move/86/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "thunder",
               "url": "https://pokeapi.co/api/v2/move/87/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "earthquake",
               "url": "https://pokeapi.co/api/v2/move/89/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "toxic",
               "url": "https://pokeapi.co/api/v2/move/92/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "confusion",
               "url": "https://pokeapi.co/api/v2/move/93/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "psychic",
               "url": "https://pokeapi.co/api/v2/move/94/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 71,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 71,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 71,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 66,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rage",
               "url": "https://pokeapi.co/api/v2/move/99/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "teleport",
               "url": "https://pokeapi.co/api/v2/move/100/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "mimic",
               "url": "https://pokeapi.co/api/v2/move/102/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "double-team",
               "url": "https://pokeapi.co/api/v2/move/104/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "recover",
               "url": "https://pokeapi.co/api/v2/move/105/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 70,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 70,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "barrier",
               "url": "https://pokeapi.co/api/v2/move/112/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 63,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 63,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 11,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "light-screen",
               "url": "https://pokeapi.co/api/v2/move/113/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "reflect",
               "url": "https://pokeapi.co/api/v2/move/115/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "bide",
               "url": "https://pokeapi.co/api/v2/move/117/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "metronome",
               "url": "https://pokeapi.co/api/v2/move/118/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "self-destruct",
               "url": "https://pokeapi.co/api/v2/move/120/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "fire-blast",
               "url": "https://pokeapi.co/api/v2/move/126/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "swift",
               "url": "https://pokeapi.co/api/v2/move/129/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 8,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "skull-bash",
               "url": "https://pokeapi.co/api/v2/move/130/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "amnesia",
               "url": "https://pokeapi.co/api/v2/move/133/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 81,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 81,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "dream-eater",
               "url": "https://pokeapi.co/api/v2/move/138/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "flash",
               "url": "https://pokeapi.co/api/v2/move/148/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "psywave",
               "url": "https://pokeapi.co/api/v2/move/149/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rest",
               "url": "https://pokeapi.co/api/v2/move/156/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rock-slide",
               "url": "https://pokeapi.co/api/v2/move/157/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "tri-attack",
               "url": "https://pokeapi.co/api/v2/move/161/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "substitute",
               "url": "https://pokeapi.co/api/v2/move/164/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "red-blue",
                     "url": "https://pokeapi.co/api/v2/version-group/1/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "yellow",
                     "url": "https://pokeapi.co/api/v2/version-group/2/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "nightmare",
               "url": "https://pokeapi.co/api/v2/move/171/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "snore",
               "url": "https://pokeapi.co/api/v2/move/173/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "curse",
               "url": "https://pokeapi.co/api/v2/move/174/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "protect",
               "url": "https://pokeapi.co/api/v2/move/182/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "mud-slap",
               "url": "https://pokeapi.co/api/v2/move/189/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "zap-cannon",
               "url": "https://pokeapi.co/api/v2/move/192/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "icy-wind",
               "url": "https://pokeapi.co/api/v2/move/196/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "detect",
               "url": "https://pokeapi.co/api/v2/move/197/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "sandstorm",
               "url": "https://pokeapi.co/api/v2/move/201/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "endure",
               "url": "https://pokeapi.co/api/v2/move/203/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "swagger",
               "url": "https://pokeapi.co/api/v2/move/207/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "sleep-talk",
               "url": "https://pokeapi.co/api/v2/move/214/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "return",
               "url": "https://pokeapi.co/api/v2/move/216/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "frustration",
               "url": "https://pokeapi.co/api/v2/move/218/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "safeguard",
               "url": "https://pokeapi.co/api/v2/move/219/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 55,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 99,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 86,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "dynamic-punch",
               "url": "https://pokeapi.co/api/v2/move/223/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "iron-tail",
               "url": "https://pokeapi.co/api/v2/move/231/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "hidden-power",
               "url": "https://pokeapi.co/api/v2/move/237/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rain-dance",
               "url": "https://pokeapi.co/api/v2/move/240/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "sunny-day",
               "url": "https://pokeapi.co/api/v2/move/241/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "psych-up",
               "url": "https://pokeapi.co/api/v2/move/244/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 77,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 33,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "shadow-ball",
               "url": "https://pokeapi.co/api/v2/move/247/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "future-sight",
               "url": "https://pokeapi.co/api/v2/move/248/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 88,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 22,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 44,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 15,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rock-smash",
               "url": "https://pokeapi.co/api/v2/move/249/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "gold-silver",
                     "url": "https://pokeapi.co/api/v2/version-group/3/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "crystal",
                     "url": "https://pokeapi.co/api/v2/version-group/4/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "hail",
               "url": "https://pokeapi.co/api/v2/move/258/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "torment",
               "url": "https://pokeapi.co/api/v2/move/259/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "will-o-wisp",
               "url": "https://pokeapi.co/api/v2/move/261/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "facade",
               "url": "https://pokeapi.co/api/v2/move/263/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "focus-punch",
               "url": "https://pokeapi.co/api/v2/move/264/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "taunt",
               "url": "https://pokeapi.co/api/v2/move/269/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "trick",
               "url": "https://pokeapi.co/api/v2/move/271/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "role-play",
               "url": "https://pokeapi.co/api/v2/move/272/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "magic-coat",
               "url": "https://pokeapi.co/api/v2/move/277/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "recycle",
               "url": "https://pokeapi.co/api/v2/move/278/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "brick-break",
               "url": "https://pokeapi.co/api/v2/move/280/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "skill-swap",
               "url": "https://pokeapi.co/api/v2/move/285/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "snatch",
               "url": "https://pokeapi.co/api/v2/move/289/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "secret-power",
               "url": "https://pokeapi.co/api/v2/move/290/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "dive",
               "url": "https://pokeapi.co/api/v2/move/291/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rock-tomb",
               "url": "https://pokeapi.co/api/v2/move/317/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "signal-beam",
               "url": "https://pokeapi.co/api/v2/move/324/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "aerial-ace",
               "url": "https://pokeapi.co/api/v2/move/332/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "bulk-up",
               "url": "https://pokeapi.co/api/v2/move/339/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "calm-mind",
               "url": "https://pokeapi.co/api/v2/move/347/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "shock-wave",
               "url": "https://pokeapi.co/api/v2/move/351/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "water-pulse",
               "url": "https://pokeapi.co/api/v2/move/352/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ruby-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/5/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "emerald",
                     "url": "https://pokeapi.co/api/v2/version-group/6/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "firered-leafgreen",
                     "url": "https://pokeapi.co/api/v2/version-group/7/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "colosseum",
                     "url": "https://pokeapi.co/api/v2/version-group/12/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "xd",
                     "url": "https://pokeapi.co/api/v2/version-group/13/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "gravity",
               "url": "https://pokeapi.co/api/v2/move/356/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "miracle-eye",
               "url": "https://pokeapi.co/api/v2/move/357/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 29,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "natural-gift",
               "url": "https://pokeapi.co/api/v2/move/363/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "embargo",
               "url": "https://pokeapi.co/api/v2/move/373/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "fling",
               "url": "https://pokeapi.co/api/v2/move/374/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "me-first",
               "url": "https://pokeapi.co/api/v2/move/382/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 79,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 71,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 71,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "power-swap",
               "url": "https://pokeapi.co/api/v2/move/384/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "guard-swap",
               "url": "https://pokeapi.co/api/v2/move/385/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 64,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 57,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "aura-sphere",
               "url": "https://pokeapi.co/api/v2/move/396/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 93,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 70,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 70,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 70,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 70,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "poison-jab",
               "url": "https://pokeapi.co/api/v2/move/398/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "aqua-tail",
               "url": "https://pokeapi.co/api/v2/move/401/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "drain-punch",
               "url": "https://pokeapi.co/api/v2/move/409/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "focus-blast",
               "url": "https://pokeapi.co/api/v2/move/411/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "energy-ball",
               "url": "https://pokeapi.co/api/v2/move/412/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "giga-impact",
               "url": "https://pokeapi.co/api/v2/move/416/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "avalanche",
               "url": "https://pokeapi.co/api/v2/move/419/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "psycho-cut",
               "url": "https://pokeapi.co/api/v2/move/427/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 50,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 43,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 36,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "zen-headbutt",
               "url": "https://pokeapi.co/api/v2/move/428/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "rock-climb",
               "url": "https://pokeapi.co/api/v2/move/431/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "trick-room",
               "url": "https://pokeapi.co/api/v2/move/433/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "stone-edge",
               "url": "https://pokeapi.co/api/v2/move/444/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "grass-knot",
               "url": "https://pokeapi.co/api/v2/move/447/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "charge-beam",
               "url": "https://pokeapi.co/api/v2/move/451/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "diamond-pearl",
                     "url": "https://pokeapi.co/api/v2/version-group/8/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "platinum",
                     "url": "https://pokeapi.co/api/v2/version-group/9/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "heartgold-soulsilver",
                     "url": "https://pokeapi.co/api/v2/version-group/10/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "wonder-room",
               "url": "https://pokeapi.co/api/v2/move/472/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "psyshock",
               "url": "https://pokeapi.co/api/v2/move/473/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "telekinesis",
               "url": "https://pokeapi.co/api/v2/move/477/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "magic-room",
               "url": "https://pokeapi.co/api/v2/move/478/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "low-sweep",
               "url": "https://pokeapi.co/api/v2/move/490/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "foul-play",
               "url": "https://pokeapi.co/api/v2/move/492/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "tutor",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "round",
               "url": "https://pokeapi.co/api/v2/move/496/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "incinerate",
               "url": "https://pokeapi.co/api/v2/move/510/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "bulldoze",
               "url": "https://pokeapi.co/api/v2/move/523/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "psystrike",
               "url": "https://pokeapi.co/api/v2/move/540/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-white",
                     "url": "https://pokeapi.co/api/v2/version-group/11/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "black-2-white-2",
                     "url": "https://pokeapi.co/api/v2/version-group/14/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 100,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "confide",
               "url": "https://pokeapi.co/api/v2/move/590/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "power-up-punch",
               "url": "https://pokeapi.co/api/v2/move/612/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "x-y",
                     "url": "https://pokeapi.co/api/v2/version-group/15/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "omega-ruby-alpha-sapphire",
                     "url": "https://pokeapi.co/api/v2/version-group/16/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "laser-focus",
               "url": "https://pokeapi.co/api/v2/move/673/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 1,
                  "move_learn_method": {
                     "name": "level-up",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         },
         {
            "move": {
               "name": "brutal-swing",
               "url": "https://pokeapi.co/api/v2/move/693/"
            },
            "version_group_details": [
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "sun-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/17/"
                  }
               },
               {
                  "level_learned_at": 0,
                  "move_learn_method": {
                     "name": "machine",
                     "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                  },
                  "version_group": {
                     "name": "ultra-sun-ultra-moon",
                     "url": "https://pokeapi.co/api/v2/version-group/18/"
                  }
               }
            ]
         }
      ],
      "name": "mewtwo",
      "order": 230,
      "species": {
         "name": "mewtwo",
         "url": "https://pokeapi.co/api/v2/pokemon-species/150/"
      },
      "sprites": {
         "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
         "back_female": null,
         "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/150.png",
         "back_shiny_female": null,
         "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
         "front_female": null,
         "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png",
         "front_shiny_female": null,
         "other": {
            "dream_world": {
               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
               "front_female": null
            },
            "official-artwork": {
               "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
            }
         },
         "versions": {
            "generation-i": {
               "red-blue": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/150.png",
                  "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/150.png",
                  "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/150.png"
               },
               "yellow": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/150.png",
                  "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/150.png",
                  "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/150.png"
               }
            },
            "generation-ii": {
               "crystal": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/150.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/150.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/150.png"
               },
               "gold": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/150.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/150.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/150.png"
               },
               "silver": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/150.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/150.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/150.png"
               }
            },
            "generation-iii": {
               "emerald": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/150.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/150.png"
               },
               "firered-leafgreen": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/150.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/150.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/150.png"
               },
               "ruby-sapphire": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/150.png",
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/150.png",
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/150.png",
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/150.png"
               }
            },
            "generation-iv": {
               "diamond-pearl": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/150.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/150.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/150.png",
                  "front_shiny_female": null
               },
               "heartgold-soulsilver": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/150.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/150.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/150.png",
                  "front_shiny_female": null
               },
               "platinum": {
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/150.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/150.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/150.png",
                  "front_shiny_female": null
               }
            },
            "generation-v": {
               "black-white": {
                  "animated": {
                     "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/150.gif",
                     "back_female": null,
                     "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/150.gif",
                     "back_shiny_female": null,
                     "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
                     "front_female": null,
                     "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/150.gif",
                     "front_shiny_female": null
                  },
                  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/150.png",
                  "back_female": null,
                  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/150.png",
                  "back_shiny_female": null,
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/150.png",
                  "front_shiny_female": null
               }
            },
            "generation-vi": {
               "omegaruby-alphasapphire": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/150.png",
                  "front_shiny_female": null
               },
               "x-y": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/150.png",
                  "front_shiny_female": null
               }
            },
            "generation-vii": {
               "icons": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/150.png",
                  "front_female": null
               },
               "ultra-sun-ultra-moon": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/150.png",
                  "front_female": null,
                  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/150.png",
                  "front_shiny_female": null
               }
            },
            "generation-viii": {
               "icons": {
                  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/150.png",
                  "front_female": null
               }
            }
         }
      },
      "stats": [
         {
            "base_stat": 106,
            "effort": 0,
            "stat": {
               "name": "hp",
               "url": "https://pokeapi.co/api/v2/stat/1/"
            }
         },
         {
            "base_stat": 110,
            "effort": 0,
            "stat": {
               "name": "attack",
               "url": "https://pokeapi.co/api/v2/stat/2/"
            }
         },
         {
            "base_stat": 90,
            "effort": 0,
            "stat": {
               "name": "defense",
               "url": "https://pokeapi.co/api/v2/stat/3/"
            }
         },
         {
            "base_stat": 154,
            "effort": 3,
            "stat": {
               "name": "special-attack",
               "url": "https://pokeapi.co/api/v2/stat/4/"
            }
         },
         {
            "base_stat": 90,
            "effort": 0,
            "stat": {
               "name": "special-defense",
               "url": "https://pokeapi.co/api/v2/stat/5/"
            }
         },
         {
            "base_stat": 130,
            "effort": 0,
            "stat": {
               "name": "speed",
               "url": "https://pokeapi.co/api/v2/stat/6/"
            }
         }
      ],
      "types": [
         {
            "slot": 1,
            "type": {
               "name": "psychic",
               "url": "https://pokeapi.co/api/v2/type/14/"
            }
         }
      ],
      "weight": 1220
    };
  }

  /**
   * Obtiene el color de la barra de progreso, según su valor actual.
   * @param progress progreso actual
   */
  getProgressColor(progress: number) {
    if (progress < 50) {
      return ProgressConstants.PROGRESS_NONE;
    } else if (progress >= 50 && progress < this.progressMaxValue / 2) {
      return ProgressConstants.PROGRESS_LOW;
    } if (progress >= this.progressMaxValue / 2 && progress < this.progressMaxValue - 50) {
      return ProgressConstants.PROGRESS_MEDIUM;
    } if (progress >= this.progressMaxValue - 50) {
      return ProgressConstants.PROGRESS_HIGH;
    }
  }
}
