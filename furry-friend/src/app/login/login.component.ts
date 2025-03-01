import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent,  RouterLink, RouterLinkActive,  FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = ''; 
  email: string = '';
  isLoggedIn: boolean = false;

  onLogin() { 

    localStorage.setItem('favorites', JSON.stringify([]));


  }
 
}
