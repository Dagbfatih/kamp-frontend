import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // selector: html tagi olarak kullanmaya yarar. index.html de en altta ki app-root'un karşılığıdır.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'fatih dağ';
  
}
