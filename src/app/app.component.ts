import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VMI';
  navarShow:boolean=false;

  clicktoadd(){
    alert("hola");
  }
}

