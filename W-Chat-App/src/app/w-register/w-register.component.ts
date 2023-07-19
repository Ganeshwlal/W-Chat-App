import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-w-register',
  templateUrl: './w-register.component.html',
  styleUrls: ['./w-register.component.css']
})
export class WRegisterComponent implements OnInit {

  constructor(private router:Router, private fb:FormBuilder, private ds:DataService){

  }

  ngOnInit(): void {

  }

  registerPage=this.fb.group({
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z. -]*')]],
    number:['',[Validators.required,Validators.pattern('[0-9]*')]],
    age:['',[Validators.required,Validators.pattern('[0-9]*')]],
    gender:['',[Validators.required,Validators.pattern('[MmfF]*')]],
    password:['',[Validators.required,Validators.pattern('[A-Za-z0-9 .*+]*')]]
  })
  
  
  
  register(){
    // alert('hello')

    var name=this.registerPage.value.fname;
    var number=this.registerPage.value.number;
    var age=this.registerPage.value.age;
    var gender=this.registerPage.value.gender;
    var password=this.registerPage.value.password;

    if(this.registerPage.valid){

    //  const result=
      this.ds.register(name, number, age, gender, password).subscribe(
        (result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('login');
        },
        result=>{
          alert(result.error.message)
        }
      )
    }
    else{
      alert('Register failed')
    // console.log(this.registerPage.get('uname1')?.errors);
    }
  }

}
