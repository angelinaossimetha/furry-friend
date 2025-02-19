import { Component, EventEmitter, Output} from '@angular/core';
import { NgFor } from '@angular/common';
import * as breedsData from '../../../public/breeds.json'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [ NgFor, FormsModule ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  breeds: string[] = breedsData.breeds; 
  sortByField: string = 'breedAscending';

  @Output() toggleSortByEvent = new EventEmitter<String>();

  toggleSortBy() : void {
    this.toggleSortByEvent.emit(this.sortByField); 
  
  }

}
