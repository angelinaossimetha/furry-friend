import { Component} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgFor, CardComponent, PaginationComponent ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [ 
   { 
      id: 1, 
      name: 'Snickerdoodle',  
      breed: "Goldendoodle",
      img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
      age: 4,
      zipCode: '12345'
   }, 
   { 
    id: 2, 
    name: 'Teddy',  
    breed: "Goldendoodle",
    img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
    age: 2,
    zipCode: '12348'
 }, 
 { 
  id: 3, 
  name: 'Polar Bear',  
  breed: "Bichon Frise",
  img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
  age: 2,
  zipCode: '12348'
}, 
{ 
  id: 4, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 5, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 6, 
  name: 'Polar Bear',  
  breed: "Bichon Frise",
  img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
  age: 2,
  zipCode: '12348'
}, 
{ 
  id: 7, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 8, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 9, 
  name: 'Polar Bear',  
  breed: "Bichon Frise",
  img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
  age: 2,
  zipCode: '12348'
}, 
{ 
  id: 10, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 11, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 12, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 13, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 14, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 15, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 16, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
},  
{ 
id: 17, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 18, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 19, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 20, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 21, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 22, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 23, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 24, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 25, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 26, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 27, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 28, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 29, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 30, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 31, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 32, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 33, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 34, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 35, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
  id: 36, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
}, 
{ 
id: 37, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 38, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 39, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 40, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 41, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 42, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 43, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 44, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 45, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 46, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 47, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 48, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 49, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 50, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 51, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
id: 52, 
name: 'Teddy',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547557142/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 2,
zipCode: '12348'
}, 
{ 
id: 53, 
name: 'Polar Bear',  
breed: "Bichon Frise",
img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
age: 2,
zipCode: '12348'
}, 
{ 
id: 54, 
name: 'Snickerdoodle',  
breed: "Goldendoodle",
img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
age: 4,
zipCode: '12345'
}, 
{ 
  id: 55, 
  name: 'Snickerdoodle',  
  breed: "Goldendoodle",
  img: "https://cdn.create.vista.com/api/media/medium/547556894/stock-photo-goldendoodle-posing-portrait-shot-grey-background-sydney?token=",
  age: 4,
  zipCode: '12345'
  },
  { 
    id: 56, 
    name: 'Polar Bear',  
    breed: "Bichon Frise",
    img: "https://imgs.search.brave.com/KhSJ7e3WT1qf-VTj7pT3A1ZPcvlwwjWE9D_wlg-mXA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NmOS93aGl0/ZS1kb2ctZnJvbGlj/a2luZy1kb2NrLTA0/MTAtNTY5ODcxMy5q/cGc_Zm10",
    age: 2,
    zipCode: '12348'
    }, ]
  itemsPerPage: number = 9; 
  currentPage: number = 1; 


  constructor() { }


  createMatrix(dataArr: CardComponent[]){
    let row: CardComponent[]  = []
    let matrix: CardComponent[][]  = [];
    for (let i = 0; i < dataArr.length + 1; i++) {
      if (i % 3 == 0 || (i === dataArr.length && row.length)) { 
        matrix.push(row);
        row = []
      }
      if ( i < dataArr.length) row.push(dataArr[i]);
    }
      return matrix; 
  }


  get paginatedData() { 
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  

    return this.data.slice(start,end);
  }

  changePage(page: number) { 
    this.currentPage = page;
  }

  

}
