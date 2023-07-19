import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-w-login',
  templateUrl: './w-login.component.html',
  styleUrls: ['./w-login.component.css']
})
export class WLoginComponent implements OnInit{

  constructor(private router:Router, private fb:FormBuilder, private ds:DataService){ }

  ngOnInit(): void {
    
  }

  loginPage=this.fb.group({
    number:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })



  login(){
    var number = this.loginPage.value.number;
    var password = this.loginPage.value.password;

    if(this.loginPage.valid){
      this.ds.login(number,password).subscribe(
        (result:any)=>{

          localStorage.setItem('currentnum',JSON.stringify(result.currentNum))

          localStorage.setItem('currentuser',JSON.stringify(result.currentUser))

          localStorage.setItem('userage',JSON.stringify(result.userAge))
          localStorage.setItem('usergender',JSON.stringify(result.userGender))
          localStorage.setItem('userpassword',JSON.stringify(result.userPassword))


          localStorage.setItem('currentChat', JSON.stringify(name));


          alert(result.message)
          this.router.navigateByUrl('dashboard');
        },
        result=>{
          alert(result.error.message)
        }
      )
      
    }

}






  // move(e:any, p:any, c:any, n:any){

  //   var length = c.value.length;
  //   var maxlength = c.getAttribute('maxlength');

  //   if(length == maxlength){
  //     if(n !=""){
  //       n.focus();
  //     }
      
  //   }
  //   console.log(e);
  //   if(e.key==="Backspace"){

  //     if(p !=""){
  //       p.focus();
  //     }

      
  //   }
    
    
  // }

}
