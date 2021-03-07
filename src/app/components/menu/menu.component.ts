import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private datos: DataService) { }

  ngOnInit(): void {
  }

  generarGame(nivel){
    
    
    this.datos.dificultad(nivel);
    
  }

}
