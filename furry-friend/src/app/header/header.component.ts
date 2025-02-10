import { Component, Input } from '@angular/core';
import {  CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  imports: [ CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() isVisibleFavoritesBtn: boolean = false;
  @Input() isVisibleMatchBtn: boolean = false;
  @Input() isVisibleLogoutBtn: boolean = false;



}
