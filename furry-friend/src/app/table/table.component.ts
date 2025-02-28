import {  Component, EventEmitter, Input, IterableDiffers, Output,  ChangeDetectorRef} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CommonModule, NgFor } from '@angular/common';
import * as dogsData from '../../../public/dogs.json'

@Component({
  selector: 'app-table',
  imports: [NgFor, CommonModule, CardComponent, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  // raw data
  data = dogsData.dogs;
  @Input() sortByField: string = 'breedAscending';
  @Input() filteredBreedsArray: string[] = [];
  @Input() isFilter = false; 

  itemsPerPage: number = 9; 
  currentPage: number = 1; 
 
  filteredData : any[] = [];
  filteredDataLen : number = 0;
  iterableDiffer;

  paginatedFilteredDataArray : any[] = []; 


  toggleFavorite(id:number) : void {
    console.log("id clicked" + id)
   

    for (let i = 0; i < this.data.length; i++) { 
      if (this.data[i].id === id) { 
        const previousIsFavorite: boolean =  this.data[i].isFavorite; 
        this.data[i].isFavorite = !previousIsFavorite

        var favorites: any = localStorage.getItem('favorites');
        var favorites1: any[] = JSON.parse(favorites)
        console.log(favorites)
        // if (favorites) {

        // }

        if (previousIsFavorite) {
          favorites1 = favorites1.filter(dog => dog.id != id);
          localStorage.setItem('favorites', JSON.stringify(favorites1));

        } else { 
          favorites1.push(this.data[i]);
          localStorage.setItem('favorites', JSON.stringify(favorites1));
        }
        return;

      }
    }
  }

  constructor(private iterableDiffers: IterableDiffers, private changeDetectorRef: ChangeDetectorRef) {
    this.iterableDiffer = iterableDiffers.find([]).create();

  }



  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.filteredBreedsArray);
    if (changes) {
      console.log('items changed ' + this.filteredBreedsArray);
      this.filterData(this.data) 
      // this.isFilter = this.filteredBreedsArray.length > 0; 
      console.log("isFilter " + this.isFilter)
    } else { 
      if (this.filteredBreedsArray.length > 0) {this.sortData(this.filteredData); console.log("lol");}
      else { 
        this.sortData(this.data);
      } 
    }
  }




  ngOnInit() {
    this.sortData(this.data); 
    this.changeDetectorRef.detectChanges();

  }


  ngOnChanges() {
    this.sortData(this.data)
    // if(this.filteredBreedsArray.length > 0 )  this.filterData(this.data) 
    // this.isFilter = this.filteredBreedsArray.length > 0; 
  }


  // set filteredDataNewLen(newLen: number) { 
  //   this.filteredDataLen = newLen; 
  // }

  sortData(dataArray : any[]) { 
    switch (this.sortByField) {
      case 'ageAscending':
        dataArray.sort((a,b) => a.age - b.age); 
        break;
      case 'ageDescending': 
        dataArray.sort((a,b) => b.age - a.age);
        break; 
      case 'breedDescending':
        dataArray.sort((a, b) => b.breed.toLowerCase().localeCompare(a.breed.toLowerCase()));
        break;
      default: // breedAscending
        dataArray.sort((a, b) => a.breed.toLowerCase().localeCompare(b.breed.toLowerCase()));
    }
  }

  filterData(dataArray: any[]) { 
    console.log("this.filteredBreedsArray in filterDataMethd" + this.filteredBreedsArray)
   let filtered : any[] = dataArray.filter(dog => this.filteredBreedsArray.includes(dog.breed)); 

   this.filteredDataLen = filtered.length; 

   console.log("this.filteredData in table.ts" + filtered)
   this.sortData(filtered); 

   this.filteredData = filtered;
   this.filteredDataLen = filtered.length;  
   this.paginatedFilteredDataArray = this.paginatedFilteredNewdDataArray()

  }








  get paginatedData() { 
   
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  
  
    

    return this.data.slice(start,end);
  }


  get paginatedFilteredData() { 
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  
  
    
    
    return this.filteredData.slice(start,end);

  }

  paginatedFilteredNewdDataArray() { 
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  
  
    
    return this.filteredData.slice(start,end);

  }

  changePage(page: number) { 
    this.currentPage = page;
  }



}
