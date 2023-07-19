import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // @Output() conversationClicked:EventEmitter<any> = new EventEmitter();

  conversation:any
  loggedUser:any;

  onConversationSelected(conversation:any){
    this.conversation=conversation;
  }

  constructor(private ds:DataService, private fb:FormBuilder, private router:Router, private http:HttpClient){

    if(localStorage.getItem('currentuser')){
      this.loggedUser=JSON.parse(localStorage.getItem('currentuser')||'')
      
    }
  }
  
  ngOnInit(): void {
    
  }

  addcontact(){
    
  }


logout(){
  localStorage.removeItem('currentuser');
    localStorage.removeItem('currentnum');
    this.router.navigateByUrl('')
}



}
