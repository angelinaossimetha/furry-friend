import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';
import { FilterComponent } from '../filter/filter.component';
import * as breedsData from '../../../public/breeds.json'
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [HeaderComponent, CardComponent, TableComponent, FilterComponent, FormsModule, NgFor,  ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isVisibleFavoritesBtn: boolean = true; 
  isVisibleMatchBtn: boolean = true;
  isVisibleLogoutBtn: boolean = true; 
  sortByField: string = 'breedAscending';
  breeds: string[] = breedsData.breeds; 

  checkboxForm: FormGroup;
  filterBreedsArray: string[] = [];

  constructor(private fb: FormBuilder) {
    this.checkboxForm = this.fb.group({
      breedCheckArray: this.fb.array([])
    });
  }

  filterData() {
    const breedCheckArray: FormArray = this.checkboxForm.get('breedCheckArray') as FormArray;

    console.log(breedCheckArray)
  
    // this.filteredData = this.data.filter(item => {
    //   const brandMatch = brandCheckArray.value.some(brand => item.brand === brand);
    //   const colorMatch = colorCheckArray.value.some(color => item.color === color);
    //   return brandMatch || colorMatch;
    // });
  }

  updateFilterBreedArray(breed: string) { 
    // const breedCheckArray: FormArray = this.checkboxForm.get('breedCheckArray') as FormArray;

    // console.log(breedCheckArray) 

    // let newArr = breedCheckArray.value
    // console.log(newArr)
    // return newArr;

    let len = this.filterBreedsArray.length

    if (len === 0) {
      this.filterBreedsArray.push(breed);
      return;
    }

    for (let i = 0; i < this.filterBreedsArray.length; i++ ) {
      if (this.filterBreedsArray[i] === breed) { 
        this.filterBreedsArray.splice(i, i);
        return;
      } 
    }

    this.filterBreedsArray.push(breed);

    console.log("filtered array" +this.filterBreedsArray);
 
  }

  
  // toggleSortBy(sortByField: string) : void {
  //   this.sortByField = sortByField; 
  // }

  
  // toggleSortBy(sortByField: string) : void {
  //   // this.sortByField = sortByField; 
  //   }
  

  

  
}
