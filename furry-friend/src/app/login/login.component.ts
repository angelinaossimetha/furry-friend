import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent, RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = ''; 
  email: string = '';
  isLoggedIn: boolean = false;

  onLogin() { 

    localStorage.setItem('favorites', JSON.stringify([]));

   
    
    // this.isLoggedIn = true
    // console.log(this.isLoggedIn)

    // if(this.name.length > 0 && this.email.length > 0 ) {
    //   return ['/src/app/search/search.component.html'];
    // }
    // return;
  }
 
}
