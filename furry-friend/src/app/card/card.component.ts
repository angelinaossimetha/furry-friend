import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id: string = '';
  @Input() name: string = ''; 
  @Input() breed: string ='';
  @Input() img: string = '';
  @Input() age: number = 0;
  @Input() zipCode: string = '';
}
