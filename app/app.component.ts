import { Component } from '@angular/core';
import { User } from '../app/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string;
  userName:string;
  password:string;

  constructor() {
    this.title = "Authentification Spring + Angular";
  }


  signIn() {
    console.log(this.userName + " " + this.password);
  }
}
