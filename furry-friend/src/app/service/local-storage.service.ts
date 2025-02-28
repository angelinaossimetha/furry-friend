import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  favorites: any[] = [];

  constructor() { 
    if (typeof localStorage !== 'undefined' && "favorites" in localStorage) {
      const data = localStorage.getItem('favorites');

      if (data) {
          this.favorites = JSON.parse(data);
          this.setItem('currentMatch', JSON.stringify({}));
      } else { 
         // Local storage is not supported
        console.log('Local storage is not supported');
        
      }
  } else {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.setItem('currentMatch', JSON.stringify({}));
  }

  }

  addToFavorites(dog: any) {
    this.favorites.push(dog);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
}

removeFromFavorites(dogId: number) {
        
  this.favorites = this.favorites.filter(dog => dog.id != dogId);
  localStorage.setItem('favorites', JSON.stringify(this.favorites));
}

clearFavorites() {
  this.favorites = [];
  localStorage.removeItem('favorites');
}

getFavorites(): any[] {
  return this.favorites;
}

setItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

getItem(key: string): string | null {
  return localStorage.getItem(key);
}

removeItem(key: string): void {
  localStorage.removeItem(key);
}

clear(): void {
  localStorage.clear();
}

}
