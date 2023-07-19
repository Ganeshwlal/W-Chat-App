import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }



  register(name:any,number:any,age:any,gender:any,password:any){
    const body={
      name,
      number,
      age,
      gender,
      password
    }
    return this.http.post('http://localhost:3000/register',body)
  }


  login(number:any, password:any){
    const body={
      number,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
  }

  addcontact(name:any, number:any, city:any){
    const body={
      name,
      number,
      city
    }
    return this.http.post('http://localhost:3000/addcontact',body)
  }


  getcontacts(){
    return this.http.get('http://localhost:3000/getcontact')
  }

  deleteCont(name:any){
    return this.http.delete('http://localhost:3000/deleteContact/'+name)


  }

  editCont(name:any,number:any, city:any){
    const body={
      name,
      number,
      city
    }
    
    return this.http.post('http://localhost:3000/editContact',body)
  
}


  searchkey=new BehaviorSubject('')


}
