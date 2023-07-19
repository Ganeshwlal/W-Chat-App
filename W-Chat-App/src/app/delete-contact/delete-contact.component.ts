import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent implements OnInit{

 @Input() item:String|undefined

 //event craetion
 @Output() onCancel=new EventEmitter()
 

 @Output() onDelete= new EventEmitter()

  constructor(private fb:FormBuilder, private ds:DataService, private http:HttpClient, private router:Router){

  }

  ngOnInit(): void {
    
  }

  cancel(){
    this.onCancel.emit()
  }

  delete(){
    this.onDelete.emit(this.item)
    // this.ngOnInit()
    // this.router.navigateByUrl('dashboard');


  }

}
