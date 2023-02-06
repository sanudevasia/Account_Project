import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../Account';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  account:Account=new Account();
  referenceNo:string;
  constructor(private s:AccountService,private router:Router) { 
  }

  ngOnInit():void{
  }
  addAccount():void{  
    this.s.addAccount(this.account).subscribe((data: any) => {
    this.referenceNo = data.referenceNo;
    this.router.navigate(['/confirm', this.referenceNo]);
  });
}
}

  //  let referenceNumber = Math.floor(Math.random() * 1000000);
  //  this.router.navigate(['/confirm'],{queryParams: {referenceNumber: referenceNumber}});
  // };
  // cancel() {
  //   this.account.clear();
  // }
    //  this.s.addAccount(this.account).subscribe((r)=>console.log(r))
// } 

 