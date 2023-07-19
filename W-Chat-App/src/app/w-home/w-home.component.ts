import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w-home',
  templateUrl: './w-home.component.html',
  styleUrls: ['./w-home.component.css']
})
export class WHomeComponent implements OnInit{
  
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

}
