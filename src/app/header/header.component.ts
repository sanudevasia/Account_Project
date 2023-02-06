import { Component,Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() userName: string;

  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) {
    this.subscription = this.sharedDataService.getData().subscribe((data) => {
      this.userName = data;
    });
  }

}
