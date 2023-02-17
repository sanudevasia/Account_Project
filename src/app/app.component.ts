import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Account';
  
  constructor() { }

  ngOnInit() {
    window.addEventListener('unload', (event) => {
      localStorage.removeItem('username');
      localStorage.removeItem('email');
    });
  }
}
