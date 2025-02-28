import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { NgFor } from '@angular/common';
import { CardComponent } from '../card/card.component'; 
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-favorites',
  imports: [HeaderComponent, TableComponent, CardComponent,  PaginationComponent , NgFor ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent { 
  isVisibleMatchBtn: boolean = true;
  isVisibleLogoutBtn: boolean = true; 

  itemsPerPage: number = 9; 
  currentPage: number = 1; 

  favorites: any[] = [];


  constructor() {
    var favorites: any = localStorage.getItem('favorites');
    this.favorites = JSON.parse(favorites)
  }

  ngOnInit() {
    var favorites: any = localStorage.getItem('favorites');
    this.favorites = JSON.parse(favorites)
  }

  toggleFavorite(id:number) : void {
    console.log("id clicked" + id)
   

    for (let i = 0; i < this.favorites.length; i++) { 
      if (this.favorites[i].id === id) { 
        const previousIsFavorite: boolean =  this.favorites[i].isFavorite; 
        this.favorites[i].isFavorite = !previousIsFavorite

        
        if (previousIsFavorite) {
          this.favorites = this.favorites.filter(dog => dog.id != id);
          localStorage.setItem('favorites', JSON.stringify(this.favorites));

        } else { 
          this.favorites.push(this.favorites[i]);
          localStorage.setItem('favorites', JSON.stringify(this.favorites));
        }

        return;

      }
    }
  }

  get paginatedData() { 
   
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  
  
    

    return this.favorites.slice(start,end);
  }
  
  changePage(page: number) { 
    this.currentPage = page;
  }



}
