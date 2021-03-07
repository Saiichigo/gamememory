import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import _, { map } from 'underscore';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  champs = [];
  allData = [];
  valor;




  constructor(private datos: DataService) {

    this.allData = _.shuffle(datos.allchampsdata);
    console.log('contructor', this.allData);

  }

  ngOnInit(): void {
    // console.log(this.datos.allchampsdata.length);
    this.valor =  document.querySelector('#valores').innerHTML = String(this.datos.allchampsdata.length);

   
    
    this.cronometro();
    // this.contadorDeCartas(this.allData);
  };


  seleccionar(name, id, uid) {


    document.getElementById(`${uid}`)
      .getElementsByTagName('img')[0].src = `../../../assets/img/${name}.png`;
    const champ = this.cambiarEstado(uid);
    //  console.log(champ);

    if (champ.active === !true) {
      document.getElementById(`${uid}`)
        .getElementsByTagName('img')[0].src = `../../../assets/img/frontal.png`;
    }
    // console.log(champ);

    if (champ.active === true) {
      this.champs.push(champ);
      // console.log('active',this.champs);
    }
    if (champ.active === false) {
      this.champs.find((id2) => id2.active === false);
      this.champs.pop();
    }

    if (this.champs.length === 2) {
      // const idAndUidChamps = [];

      // mas simple con una desestructuracion xD
      const [champ1, champ2] = this.champs;
      // console.log(champ1, champ2);


      if (champ1.id === champ2.id) {
        this.respuestaCorrecta(this.champs);
      } else {
        this.respuestaIncorrecta(this.champs);
      }
    }
  }

  cambiarEstado(uid) {
    const uid2 = this.allData.find((id) => id.uid === uid);
    uid2.active = !uid2.active;
    return uid2;
  }

  respuestaCorrecta(data) {

    setTimeout(() => {
      const [resp1, resp2] = data;

      const newArgChamps = this.allData.filter((id) => id.id !== resp1.id);

      this.allData = newArgChamps;

      this.contadorDeCartas(this.allData);
      
      this.champs = [];
      
    }, 1000);
  }

  respuestaIncorrecta(data) {
    setTimeout(() => {

      for (const iterator of data) {
        document
          .getElementById(`${iterator.uid}`)
          .querySelector('img').src = '../../../assets/img/frontal.png';
        this.cambiarEstado(iterator.uid);
        this.champs = [];
      }
    }, 300);
  }

  cronometro() {
    document.querySelector('#cronometro').innerHTML = "00:00:00";

    let hAux, mAux, sAux;

    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    setInterval(() => {
      segundos++;  
      if (segundos > 59) { minutos++; segundos = 0; }
      if (minutos > 59) { horas++; minutos = 0; }
      if (horas > 24) { horas = 0; }

      if (segundos < 10) { sAux = "0" + segundos; } else { sAux = segundos; }
      if (minutos < 10) { mAux = "0" + minutos; } else { mAux = minutos; }
      if (horas < 10) { hAux = "0" + horas; } else { hAux = horas; }
      document.querySelector('#cronometro').innerHTML = hAux + ':' + mAux + ":" + sAux;
    }, 1000)
  }

  contadorDeCartas(datos){
    console.log('datos',datos.length);
    
    let contador = datos.length
    this.valor =   document.querySelector('#valores').innerHTML = String(contador);
    if (contador === 0 ) {
        this.juegoGanador();
    }

  }

  juegoGanador(){

      alert('Felicidades Ganaste')

  }


}
