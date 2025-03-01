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
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';   

@Component({
  selector: 'app-search',
  imports: [HeaderComponent, CardComponent, TableComponent, FilterComponent, FormsModule, NgFor,  ReactiveFormsModule, FooterComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  isVisibleFavoritesBtn: boolean = true; 
  isVisibleMatchBtn: boolean = true;
  isVisibleLogoutBtn: boolean = true; 
  sortByField: string = 'breedAscending';
  breeds: string[] = breedsData.breeds; 

  filteredBreedsArray: string[] = [];
  isFilter: boolean = false; 
  
  constructor(private router: Router) {
    var favorites: any = localStorage.getItem('favorites');
    if (!favorites) {
      this.router.navigate(['/login']); // Replace '/home' with your actual home route path
    }
  }

  updatefilteredBreeds(breed : string) {
    if (this.filteredBreedsArray.includes(breed)) {
      let valueToRemove = breed;
      let index = this.filteredBreedsArray.indexOf(valueToRemove);
      if (index !== -1) {
        this.filteredBreedsArray.splice(index, 1);
      }
    } else {
      this.filteredBreedsArray.push(breed);
    }
    this.isFilter = this.filteredBreedsArray.length > 0; 
    console.log('filtered breeds array '+ this.filteredBreedsArray );
  }
  
  
}
