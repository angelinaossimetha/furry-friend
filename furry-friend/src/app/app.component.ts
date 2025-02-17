import { Component } from '@angular/core';
import { RouterLink, RouterOutlet} from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatchComponent } from './match/match.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardComponent } from "./card/card.component"; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LoginComponent, SearchComponent, TableComponent, FavoritesComponent, MatchComponent, PaginationComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'furry-friend';
}
