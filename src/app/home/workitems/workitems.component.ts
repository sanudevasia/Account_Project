import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../taskdetails/Task';
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
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.email = this.route.snapshot.paramMap.get('email');
  }

  ngOnInit(): void {
    this.getTasksByAssignee().subscribe((data) => {
      this.tasks = data;
      console.log(data);
    });
  }

  getTasksByAssignee(): Observable<any> {
    // Get the user email from the object
    const userEmail = this.email;
    return this.http.get(
      `http://localhost:8080/engine-rest/task?assignee=${userEmail}`
    );
  }
}
