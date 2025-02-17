import { Component, ViewChild} from '@angular/core';
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
  // raw data
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
  // make data into cardsArray 
  // cardsArray : CardComponent[] = [];
  finalData : any[][] = [];

  itemsPerPage: number = 9; 
  currentPage: number = 1; 

  toggleFavorite(id:number, row: number, col: number) : void {
    const previousIsFavorite: boolean =  this.finalData[row][col].isFavorite; 
    console.log("previous "+ previousIsFavorite)
    this.finalData[row][col].isFavorite = !previousIsFavorite
    console.log("new "+ this.finalData[row][col].isFavorite)
    // this.data[index].isFavorite = 
    // console.log('Button clicked!');
    // console.log("before: " + this.isFavorite)
    // this.isFavorite = !this.isFavorite
    // console.log("after: " + this.isFavorite)
  }


  constructor() {
    // this.cardsArray = this.makeCardsArray(this.data)
    this.finalData = this.createMatrix(this.paginatedData(this.data))
    // this.finalData = this.createMatrix(this.paginatedData)
   
   }

   
    


  createMatrix(dataArr: any[]){
    // createMatrix(dataArr: CardComponent[]){
    let row: any[]  = []
    // let row: CardComponent[]  = []
    // let matrix: CardComponent[][]  = [];
    let matrix: any[][]  = [];
    for (let i = 0; i < dataArr.length + 1; i++) {
      if (i % 3 == 0 || (i === dataArr.length && row.length)) { 
        matrix.push(row);
        row = []
      }
      if ( i < dataArr.length)
        // const item  = dataArr[i];
        // const card = new CardComponent(dataArr[i].id, dataArr[i].name, dataArr[i].breed, dataArr[i].img, dataArr[i].age,dataArr[i].zipCode);
        dataArr[i].isFavorite = false; 
        row.push(dataArr[i]);
    }
      return matrix; 
  }

  // makeCardsArray(dataArr: any[]) { 
  //   const cardsArray: CardComponent[] = [];

  //   for(let i = 0; i < dataArr.length; i++) { 
  //     cardsArray[i] = new CardComponent(dataArr[i].id, dataArr[i].name, dataArr[i].breed, dataArr[i].img, dataArr[i].age,dataArr[i].zipCode)
  //   }
  //   return cardsArray;

  // }


  paginatedData(dataArr : any[]) { 
    // paginatedData(dataArr : CardComponent[]) { 
    const start = (this.currentPage -1) * this.itemsPerPage; 
    const end = start + this.itemsPerPage;  

    return dataArr.slice(start,end);
  }

  changePage(page: number) { 
    this.currentPage = page;
  }



}
