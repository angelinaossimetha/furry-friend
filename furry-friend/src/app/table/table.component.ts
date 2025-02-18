import { Component} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { NgFor } from '@angular/common';
import * as dogsData from '../../../public/dogs.json'

@Component({
  selector: 'app-table',
  imports: [NgFor, CardComponent, PaginationComponent ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  // raw data
  data = dogsData.dogs;


  itemsPerPage: number = 9; 
  currentPage: number = 1; 

  toggleFavorite(id:number) : void {
    const previousIsFavorite: boolean =  this.data[id-1].isFavorite; 
    this.data[id-1].isFavorite = !previousIsFavorite
  
   
  }


  constructor() {
    
   }



  get paginatedData() { 
   
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  
  
    console.log( this.data.slice(start,end))

    return this.data.slice(start,end);
  }

  changePage(page: number) { 
    console.log('current page '+ page);
    console.log('id 9 favorite '+ this.data[8].isFavorite)
    this.currentPage = page;
  }



}
