import { Component,  EventEmitter,  Input, Optional, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() id: number = 0;
  @Input() name: string = ''; 
  @Input() breed: string ='';
  @Input() img: string = '';
  @Input() age: number = 0;
  @Input() zipCode: string = '';
  @Input() isFavorite: boolean  = false;
 
  iconClass?: string = 'fa fa-heart-o';
  @Output() toggleFavoriteEvent = new EventEmitter<Number>();

  constructor() {
   


  }

  toggleFavorite() : void {
   
    this.toggleFavoriteEvent.emit(this.id)
    this.isFavorite = !this.isFavorite
  
  }


   

   
  

}
