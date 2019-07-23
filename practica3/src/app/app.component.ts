import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica3';
  public bandera: boolean;
  public image: string;
  public 
  constructor(){
    this.bandera = false;
  }
  function() {
    this.bandera = !this.bandera;
  }
}
