import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string="";
  warning: string="";

  inputUsername = (event: any) =>{
    this.warning = "";
    this.username = (<HTMLInputElement>event.target).value;
  }

  resetInput = () =>{
    if (this.username !== ""){
      this.username = "";
    }else{
      this.warning = "Username input was already empty";
    }
  }
}
