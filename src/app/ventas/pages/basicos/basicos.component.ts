import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower: string = 'nicolas';
 nombreUpper: string = 'NICOLAS';
 nombreCompleto: string = 'niColas iBAceta';

 fecha: Date = new Date();

}
