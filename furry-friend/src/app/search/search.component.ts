import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { TableComponent } from '../table/table.component';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-search',
  imports: [HeaderComponent, CardComponent, TableComponent, FilterComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isVisibleFavoritesBtn: boolean = true; 
  isVisibleMatchBtn: boolean = true;
  isVisibleLogoutBtn: boolean = true; 

}
