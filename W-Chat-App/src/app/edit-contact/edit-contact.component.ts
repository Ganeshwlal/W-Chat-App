import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{

  @Input() edititem:String|undefined

  constructor(private fb:FormBuilder, private ds:DataService, private http:HttpClient, private router:Router){

  }
  name:any
  number:any
  city:any
  currentChat:any
  currentchatNum:any
  currentcity:any
  num:any


  ngOnInit(): void {
    this.currentChat = JSON.parse(localStorage.getItem('currentChat')||'')

    this.currentchatNum = JSON.parse(localStorage.getItem('currentChat-Num')||'')

    this.currentcity = JSON.parse(localStorage.getItem('currentCity')||'')

  }
  //  this.num = this.currentchatNum

  editContactPage=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-z0-9 +]*')]],
    number:['',[Validators.required,Validators.pattern('[0-9]*')]],
    city:['',[Validators.required,Validators.pattern('[a-zA-Z +]*')]]
  })
  

  editContact(){
    var name=this.editContactPage.value.name;
    var number=this.editContactPage.value.number;
    // var number = this.currentchatNum
    var city=this.editContactPage.value.city;

    if(this.editContactPage.valid){
      this.ds.editCont(name,number,city).subscribe(
        (result:any)=>{
          alert(result.message)
          this.editContactPage.reset();
          this.router.navigateByUrl('dashboard')
          this.ngOnInit()

        },
        result=>{
          alert(result.error.message)
        }
      )
    }
  }
}
