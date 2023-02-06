import { getLocaleTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { Tasks } from '../tasklist/Tasks';
import { comment } from './comment';
import { Task } from './Task';
import { Taskdetails } from './Taskdetails';
import { UTask } from './UTask';



@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public router: Router,
    public activatedRoute:ActivatedRoute,
    public dialog: MatDialog
  ) { }

    comments:comment[]=[];
     tasks:Taskdetails; 
     task:Task;
     msg:string;
     commentMessage:string;
     utask: UTask;

    ngOnInit(): void {
     this.activatedRoute.params.subscribe(({taskid}) => { 
        this.getTaskbyId(taskid).subscribe((data)=>{this.tasks=data}),
        this.getAllVariables(taskid).subscribe(
          (data)=>{this.task=data;console.log(JSON.stringify(data))
          console.log(this.task) }
        )
      })
    }
    getAllVariables(id:string): Observable<any>{
         return this.http.get("http://localhost:8080/engine-rest/task/"+id+"/variables",);
    }

    getClaim(){
      this.activatedRoute.params.subscribe(
        ({taskid})=>{this.claim(taskid,"demo").subscribe(
          (data)=>{
            console.log(data)
            this.msg="Successfully Claimed"
            window.alert(this.msg)
          }
        )}
      )
    }
  

   claim(id:string,userId:string): Observable<any>{
    return this.http.post("http://localhost:8080/engine-rest/task/"+id+"/claim",{userId});

   }
 
   getTaskbyId(id:string): Observable<any>{
    return this.http.get("http://localhost:8080/engine-rest/task/"+id);

   }

   sendComment(){
    this.activatedRoute.params.subscribe(
      ({taskid})=>{this.comment(taskid,this.commentMessage).subscribe(
        (data)=>{
          console.log(data)
        }
      )}
    )
   }
   comment(id:string,message:string) :Observable<any>{
     return this.http.post('http://localhost:8080/engine-rest/task/'+id+'/comment/create',{message});
   }
  
getcomments(){
  this.activatedRoute.params.subscribe(({taskid})=>{
      console.log(taskid); 
      this.getComment(taskid).subscribe((data)=>{this.comments=data})
    });
    var x = document.getElementById('SectionName');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } 
}

   getComment(id:string) :Observable<any>{
      return this.http.get("http://localhost:8080/engine-rest/task/"+id+"/comment");
    }

    approveTask(taskId: string, taskName: string){
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '350px',
        data: { action: "Approve", taskId: taskId, taskName: taskName }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.utask ={...this.utask, taskStatus:"Approved", taskId: taskId, taskName: taskName};
          this.update(this.utask).subscribe((data)=>{
            console.log(data);
          });
        }
      });
    }
  
    rejectTask(taskId: string, taskName: string){
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '350px',
        data:  { action: "Reject", taskId: taskId, taskName: taskName }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.utask ={...this.utask, taskStatus:"Rejected" , taskId: taskId, taskName: taskName};
          this.update(this.utask).subscribe((data)=>{
            console.log(data);
          });
        }
      });
    }

    update(utask : UTask | undefined){
      return this.http.put("http://localhost:8080/account/updateTaskStatus", utask,{responseType:'text'});
     }
    

}
  
   


// task:Task[]=[];
//   constructor(private taskService: TaskserviceService,private h:HttpClient) { }

//   ngOnInit(): void {
//   }
//   getAllTasks():Observable<any>
//   {
    
//     //using camunda api
//       return this.h.get("http://localhost:8080/engine-rest/task/449610a5-9269-11ed-9602-c42360f74eb0/variables");
//     //using java api
//     //  return this.h.get("http://localhost:8080/account/tasks");
//     }
// claimTask(taskId:string, userId:string){
//   this.taskService.claimTask(taskId, userId).subscribe(response => {
//     console.log(response);
//     // task has been claimed successfully
//   });
// }
// }
// ------

 //    details:Task[]=[];
    
  // ngOnInit(): void {

  //   this.getAllTasks().subscribe(

  //     (data)=>{this.details=data;console.log(JSON.stringify(data))}

  //   )

  // }
  
  // getAllTasks():Observable<any>
  // {
  //   //using camunda api
  //     return this.http.get("http://localhost:8080/engine-rest/task/449610a5-9269-11ed-9602-c42360f74eb0/variables");
  //   }
 //  getTasks():void{
  //   this.getAllTasks().subscribe(
  //     (data)=>{this.tasks=data;console.log(JSON.stringify(data))}
  //   )
  // }
  // getAllTasks():Observable<any>
  // {
  //   //using camunda api
  //     return this.http.get("http://localhost:8080/engine-rest/task");
  //   //using java api
  //   //  return this.h.get("http://localhost:8080/account/tasks");
  //   }
