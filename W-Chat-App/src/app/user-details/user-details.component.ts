import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder, private ds:DataService, private http:HttpClient, private router:Router){
    
  }

  firstName:any;
  lastName:any;
  email:any;
  Number:any;
  Age:any;
  Gender:any;
  Password:any

  ngOnInit(): void {
    this.firstName = JSON.parse(localStorage.getItem('currentuser')||'')
    this.Number = JSON.parse(localStorage.getItem('currentnum')||'')

    this.Age = JSON.parse(localStorage.getItem('userage')||'')

    this.Gender = JSON.parse(localStorage.getItem('usergender')||'')

    this.Password = JSON.parse(localStorage.getItem('userpassword')||'')

  }

  

  // constructor(private api:ApiService, private router:Router){

    // this.firstName =JSON.parse( localStorage.getItem('currentuser'));
  //   this.lastName = localStorage.getItem('lastName');
  //   this.email = localStorage.getItem('currentEmail')
  // }

  // logOut(){
  //   localStorage.removeItem('userLogin');
  //   localStorage.removeItem('currentEmail');
  //   localStorage.removeItem('firstName');
  //   localStorage.removeItem('lastName');
  //   this.router.navigateByUrl('');
  // }

}




//   firstName:any;
//   lastName:any;
//   email:any;

//   constructor(private api:ApiService, private router:Router){
//     this.firstName = localStorage.getItem('firstName');
//     this.lastName = localStorage.getItem('lastName');
//     this.email = localStorage.getItem('currentEmail')
//   }

//   logOut(){
//     localStorage.removeItem('userLogin');
//     localStorage.removeItem('currentEmail');
//     localStorage.removeItem('firstName');
//     localStorage.removeItem('lastName');
//     this.router.navigateByUrl('');
//   }
// }