import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.css']
})
export class ChatSidebarComponent implements OnInit {

  @Output() conversationClicked:EventEmitter <any> = new EventEmitter();

  showtime:any;
  contact: any;

  constructor(private fb:FormBuilder, private ds:DataService, private http:HttpClient, private router:Router){
    this.showtime=Date();
  }

  getcontact:any
  searchTerm:string=''

  number:any;
  name:any

  ngOnInit(): void {

    this.ds.getcontacts().subscribe(
      (data:any)=>{
        this.getcontact=data.contacts
      }
    )

    
    this.ds.searchkey.subscribe(
      (data:any)=>{
        this.searchTerm=data
      }
    )
  }

 
  getUser(contact:any){
    let name = contact.name
    console.log(name);
    localStorage.setItem('currentChat', JSON.stringify(name));
    localStorage.setItem('currentChat-Num',JSON.stringify(contact.number));
    localStorage.setItem('currentCity',JSON.stringify(contact.city))
// window.location.reload()
    

  }
  
  searchText:any

  


  

  addContactPage=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    number:['',[Validators.required,Validators.pattern('[0-9]*')]],
    city:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })
  


  addContact(){
    var name=this.addContactPage.value.name;
    var number=this.addContactPage.value.number;
    var city=this.addContactPage.value.city;

    if(this.addContactPage.valid){
      this.ds.addcontact(name,number,city).subscribe(
        (result:any)=>{
          alert(result.message)
          this.addContactPage.reset();
          this.router.navigateByUrl('/dashboard')
          this.ngOnInit()

        },
        result=>{
          alert(result.error.message)
        }
      )
    }
  }
  ///////////////////////





  ////////////////////////////////////////////
  // get filteredConversations(){
  //  return this.conversations.filter((conversation)=>{
  //   return conversation.name
  //   .toLowerCase().includes(this.searchText
  //     .toLowerCase() )  || 
  //     conversation.lastMsg
  //     .toLowerCase().includes(this.searchText
  //       .toLowerCase() );
  //  })
  // }

  search(event:any){
    let searchKey=event.target.value
    this.ds.searchkey.next(searchKey)
  }

  delete(){
    // alert('delete')
this.name=JSON.parse(localStorage.getItem('currentChat')||'')
  }

  // editContact(){
  //   this.number=JSON.parse(localStorage.getItem('currentChat')||'')
  // }

  oncancel(){
    this.name=''
  }

  ondelete(event:any){
    this.ds.deleteCont(event).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('/dashboard')
        this.ngOnInit()
      },
      result=>{
        alert(result.error.message)

      }
      )

    //  alert(event)
  }

}
