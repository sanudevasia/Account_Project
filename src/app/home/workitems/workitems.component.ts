import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/shared-data.service';
import { Taskdetails } from '../taskdetails/Taskdetails';
import { userData } from './userData';

@Component({
  selector: 'app-workitems',
  templateUrl: './workitems.component.html',
  styleUrls: ['./workitems.component.css'],
})
export class WorkitemsComponent {
  userdata: userData;
  email: string;

  tasks: Taskdetails;
  subscription: Subscription;
  constructor(
    private http: HttpClient,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.subscription = this.sharedDataService.getEmail().subscribe((data) => {
      this.email = data;
      this.getTasksByAssignee().subscribe((data) => {
        this.tasks = data;
        console.log(data);
      });
    });
  }

  getTasksByAssignee(): Observable<any> {
    return this.http.get(
      `http://localhost:8080/engine-rest/task?assignee=` + this.email
    );
  }
}
