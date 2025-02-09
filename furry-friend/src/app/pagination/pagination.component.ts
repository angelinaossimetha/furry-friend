import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-pagination',
  imports: [NgFor, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 0;
  @Input() itemsPerPage: number = 0;
  @Output() onClick: EventEmitter<number> = new EventEmitter(); 
  totalPages: number = 0; 
  pages: number[] = [];

  constructor() {}

  ngOnInit() {
    if (this.totalItems) 
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.pages = Array.from({length:this.totalPages}, (_,i) => i + 1);

  
  }

  pageClicked(page: number) { 
    if(page>this.totalPages) return;
    this.onClick.emit(page);
  }

}
