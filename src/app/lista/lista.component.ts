import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  movies: string[] = [
    'The Butterfly Effect', 'Fabricated city',
    'The Nun', 'Hereditary', 'Orphan', 'Heavens Postman'
  ];

  isLoading = true;

}
