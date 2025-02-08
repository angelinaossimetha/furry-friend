import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { FavoritesComponent } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SearchComponent, TableComponent, FavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'furry-friend';
}
