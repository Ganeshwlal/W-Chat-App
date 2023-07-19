import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit{

  // mess
  @Input() conversation: any;

  @Output() onSubmit:EventEmitter<any> = new EventEmitter();

  emojiPickerVisible:any
  message:any

  showtime:any
  currentChat:any

  constructor(private ds:DataService, private http:HttpClient, private fb:FormBuilder, private router:Router){
    this.showtime=Date();
  }

  displayName:any

  ngOnInit(): void {

    this.ds.getcontacts().subscribe(
      (data:any)=>{
        // this.displayName=data.contacts
        this.currentChat = JSON.parse(localStorage.getItem('currentChat')||'')
        console.log(this.currentChat);
        

      }
    )
    
  }

  submitMessage(event:any){
// alert (event.target.value)
let value=event.target.value
// .trims();
event.target.value='';
// this.message=""
// if(value.length<1) return false

this.conversation.lastMsg = value

this.conversation.messages.unshift({
  id:1,
  body:value,
  time:'8:42',
  me:true
})

// event.preventDefault();
// event.stopImmediatePropagation();

  }

  emojiClicked(event:any){
console.log(event);
this.message += event.emoji.navtive

  }

}
