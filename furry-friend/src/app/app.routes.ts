import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { MatchComponent } from './match/match.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: LoginComponent}, 
    {path: 'search', component: SearchComponent }, 
    {path: 'match', component: MatchComponent }, 
    {path: 'favorites', component:  FavoritesComponent },
    {path: 'login', component: LoginComponent}, 
    {path: 'logout', redirectTo: ''},
    { path: '**', redirectTo: '' }, // Redirect any unmatched route to login

];
