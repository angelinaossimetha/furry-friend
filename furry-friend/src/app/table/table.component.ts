import { Component} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgFor, CardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [ 
   { 
      id: 0, 
      name: 'Snickerdoodle',  
      breed: "Goldendoodle",
      img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
      age: 4,
      zipCode: '12345'
   }, 
   { 
    id: 0, 
    name: 'Teddy',  
    breed: "Goldendoodle",
    img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
    age: 2,
    zipCode: '12348'
 }, 
 { 
  id: 0, 
  name: 'Polar Bear',  
  breed: "Bichon Frise",
  img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
  age: 2,
  zipCode: '12348'
}, 
{ 
  id: 0, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 0, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 0, 
  name: 'Polar Bear',  
  breed: "Bichon Frise",
  img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
  age: 2,
  zipCode: '12348'
}, 
{ 
  id: 0, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 0, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 0, 
  name: 'Polar Bear',  
  breed: "Bichon Frise",
  img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
  age: 2,
  zipCode: '12348'
}, 

  ]


  public createMatrix(){
    let row: CardComponent[]  = []
    let matrix: CardComponent[][]  = [];
    for (let i = 0; i < this.data.length; i++) {
      if (i % 3 == 0) { 
        matrix.push(row);
        row = []
      }
      this.data[i].id = i + 1;
      row.push(this.data[i]);
    }
      return matrix; 
  }

  matrix = this.createMatrix()

}
