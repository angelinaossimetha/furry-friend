import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-match',
  imports: [HeaderComponent, CardComponent, CommonModule],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {
  isVisibleLogoutBtn: boolean = true; 
  match: any = {}; 
  hasFavorites: boolean = false;

  constructor() { 
    var favorites: any = localStorage.getItem('favorites');
    favorites = JSON.parse(favorites)
    if (favorites.length === 0) return; 
    this.hasFavorites = true;
    
    

    const matchId: number = Math.floor(Math.random() * favorites.length); 

    this.match = favorites[matchId];

  }
}
