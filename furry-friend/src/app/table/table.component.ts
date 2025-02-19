import { Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() sortByField: string = 'breedAscending';
  @Input() filterBreedsArray: string[] = [];


  itemsPerPage: number = 9; 
  currentPage: number = 1; 
 

  // @Output() toggleSortByEvent = new EventEmitter<String>();

  toggleFavorite(id:number) : void {
    console.log("id clicked" + id)
    // const previousIsFavorite: boolean =  this.data[id-1].isFavorite; 
    // this.data[id-1].isFavorite = !previousIsFavorite

    for (let i = 0; i < this.data.length; i++) { 
      if (this.data[i].id === id) { 
        const previousIsFavorite: boolean =  this.data[i].isFavorite; 
        this.data[i].isFavorite = !previousIsFavorite

      }
    }
  }



  ngOnInit() {
    this.sortData(); 
    // if(this.filterBreedsArray.length > 0) this.filterData()
  }


  ngOnChanges() {
    this.sortData()
    if (this.filterBreedsArray.length > 0) this.filterData()
  }

  // toggleSortBy(sortByField: string) : void {
  //   console
  //   console.log(sortByField);
  //   this.toggleSortByEvent.emit(this.sortByField)
  //   this.sortByField = sortByField
  //   console.log(this.sortByField);
  
  // }


  sortData() { 
    switch (this.sortByField) {
      case 'ageAscending':
        this.data.sort((a,b) => a.age - b.age); 
        break;
      case 'ageDescending': 
        this.data.sort((a,b) => b.age - a.age);
        break; 
      case 'breedDescending':
        this.data.sort((a, b) => b.breed.toLowerCase().localeCompare(a.breed.toLowerCase()));
        break;
      default: // breedAscending
        this.data.sort((a, b) => a.breed.toLowerCase().localeCompare(b.breed.toLowerCase()));
    }
  }

  filterData() {
    this.data =  this.data.filter(item => this.filterBreedsArray.includes(item.breed));
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
