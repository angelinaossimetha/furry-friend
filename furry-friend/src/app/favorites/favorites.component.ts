import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-favorites',
  imports: [HeaderComponent, TableComponent ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent { 
  isVisibleMatchBtn: boolean = true;
  isVisibleLogoutBtn: boolean = true; 

}
