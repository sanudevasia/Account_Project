//import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { AccountService } from '../account.service';
 import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// implements OnInit
export class HomeComponent implements OnInit {
  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;
  // constructor(private observer: BreakpointObserver) {
  // }
  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
  //     if(res.matches){
  //     this.sidenav.mode = 'over';
  //     this.sidenav.close();
  //   }else{
  //     this.sidenav.mode = 'side';
  //     this.sidenav.open();
  //   }
  // });
  // }
  // title = 'Nav';
  constructor() {}
  ngOnInit():void{
  }
}

