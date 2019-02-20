import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showid:any;
  showNav = false;

  constructor(private router:Router){
    
  }

  ngOnInit() {
   
  } 

  gohome(){
    this.router.navigate(['']);
  }
}

