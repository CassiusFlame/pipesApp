import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'niColas IbaCeta';
  valor: number = 1000;
  obj= {
    nombre: 'Nicolas'
  }

  mostrarNombre(){
    
  }
}
