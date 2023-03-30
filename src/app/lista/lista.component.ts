import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  students: string[] = [
    'Maria Sandra Lopez Juarez', 'José Eduardo Pérez Castillo',
    'Thalia Lisset Jeremías Santos', 'Susana Cecilia Álvarez Durand', 
    'Pedro Javier Morales Cáceres'
  ];

  isLoading = true;

}
