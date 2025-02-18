import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import * as breedsData from '../../../public/breeds.json'

@Component({
  selector: 'app-filter',
  imports: [ NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  breeds: string[] = breedsData.breeds; 

}
