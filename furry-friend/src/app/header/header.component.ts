import { Component, Input } from '@angular/core';
import {  CommonModule } from '@angular/common'; 
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isVisibleFavoritesBtn: boolean = false;
  @Input() isVisibleMatchBtn: boolean = false;
  @Input() isVisibleLogoutBtn: boolean = false;
  @Input() isVisibleSearchBtn: boolean = false;

  onLogout() { 
    localStorage.clear();
  }



}
