import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';
import { FilterComponent } from '../filter/filter.component';
import * as breedsData from '../../../public/breeds.json'
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [HeaderComponent, CardComponent, TableComponent, FilterComponent, FormsModule, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isVisibleFavoritesBtn: boolean = true; 
  isVisibleMatchBtn: boolean = true;
  isVisibleLogoutBtn: boolean = true; 
  sortByField: string = 'breedAscending';
  breeds: string[] = breedsData.breeds; 

  
  // toggleSortBy(sortByField: string) : void {
  //   this.sortByField = sortByField; 
  // }

  
  // toggleSortBy(sortByField: string) : void {
  //   // this.sortByField = sortByField; 
  //   }
  

  

  
}
