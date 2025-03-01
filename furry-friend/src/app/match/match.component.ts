import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-match',
  imports: [HeaderComponent,  CommonModule],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {
  isVisibleLogoutBtn: boolean = true; 
  isVisibleSearchBtn: boolean = true; 
  isVisibleFavoritesBtn: boolean = true; 
  match: any = {}; 
  hasFavorites: boolean = false;

  constructor(private router: Router) { 
    var favorites: any = localStorage.getItem('favorites');
    if (!favorites) {
      this.router.navigate(['/login']);
    }



   
    favorites = JSON.parse(favorites)
    if (favorites.length === 0) return; 
    this.hasFavorites = true;
    
    

    const matchId: number = Math.floor(Math.random() * favorites.length); 

    this.match = favorites[matchId];

  }



}
