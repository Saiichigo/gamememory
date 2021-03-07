import { Injectable } from '@angular/core';
import _, { map } from 'underscore';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  nameChamps = [
    'Aatrox',
    'Akali',
    'Annie',
    'AurelionSol',
    'Azir',
    'Brand',
    'Braum',
    'Chogath',
    'Darius',
    'Diana',
    'Elise',
    'Fiora',
    'Garen',
    'Irelia',
    'Janna',
    'JarvanIV',
    'Jax',
    'Kalista',
    'Katarina',
    'Kayle',
    'Kennen',
    'Kindred',
    'LeeSin',
    'Lulu',
    'Maokai',
    'Morgana',
    'Nasus',
    'Nautilus',
    'Neeko',
    'Nidalee',
    'Nunu',
    'Olaf',
    'Ornn',
    'Pyke',
    'Rakan',
    'Samira',
    'Sejuani',
    'Sett',
    'Shen',
    'Shyvana',
    'Sivir',
    'Swain',
    'TahmKench',
    'Talon',
    'Teemo',
    'Tristana',
    'Tryndamere',
    'TwistedFate',
    'Veigar',
    'Vi',
    'Vladimir',
    'Wukong',
    'Xayah',
    'Yasuo',
    'Yone',
    'Yuumi',
    'Zed',
    'Zilean',
  ];
  
  

  allchampsdata = [];
  allId = [];

  constructor() {
    // this.dificultad()
    // this.crearCartas();
    // this.crearId();
  }

  dificultad(cantidadBaraja?){
    this.nameChamps = _.sample (this.nameChamps, cantidadBaraja);

    this.crearId();
    
    this.crearCartas();
      
  }

  crearCartas() {
    for (const name of this.nameChamps) {
      
          for (let index = 0; index <= 2; index++) {
            let nuevaCarta = {
              nombre: name,
              id: this.allId[0],
              uid: Math.floor(Math.random() * 999999),
              frontal: 'frontal',
              active: false,
            };
            this.allchampsdata.push(nuevaCarta);
            index++;
          }
          this.allId.shift();
        }
      }

  crearId(){
    for (let index = 0; index <= this.nameChamps.length; index++) {
      this.allId.push(index);
      
    }
  }
  



}
