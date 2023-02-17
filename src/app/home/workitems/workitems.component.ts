import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/shared-data.service';
import { Tasks } from '../tasklist/Tasks';
import { userData } from './userData';

@Component({
  selector: 'app-workitems',
  templateUrl: './workitems.component.html',
  styleUrls: ['./workitems.component.css'],
})
export class WorkitemsComponent {
  displayedColumns: string[] = ['id', 'name', 'created', 'assigned'];
  dataSource: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  userdata: userData;
  email: string;
  subscription: Subscription;

  // tasks:Taskdetails;
  tasks: Tasks[] = [];
  constructor(
    private http: HttpClient,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('ngoninit called');
    console.log(this.tasks.length);
    this.email = localStorage.getItem('email');
    console.log(this.email);
    if (this.email == null) {
      console.log('if condition called');
      this.sharedDataService.getEmail().subscribe((data) => {
        this.email = data;
        console.log(data);
        this.getTasksByAssignee().subscribe((data) => {
          this.tasks = data;
          if (this.tasks.length == 0) {
            console.log('tasks if called');
            this.router.navigateByUrl('');
          }
          console.log(data);
          this.dataSource = new MatTableDataSource<Tasks>(data);
          this.dataSource.paginator = this.paginator;
        });
      });
    } else {
      this.getTasksByAssignee().subscribe((data) => {
        this.tasks = data;

        console.log(data);
        this.dataSource = new MatTableDataSource<Tasks>(data);
        this.dataSource.paginator = this.paginator;
      });
    }
    console.log(this.email);
  }

  getTasksByAssignee(): Observable<any> {
    return this.http.get(
      `http://localhost:8080/engine-rest/task?assignee=` + this.email
    );
  }
}
