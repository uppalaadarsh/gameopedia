import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  imagepath:  any= '';
  file:any; 

  constructor() { 
   
  }
  characters=[];
    
   
  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('stored'));
    
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      this.characters.push({moviename:data[i].moviename,
        directorname:data[i].directorname,
        castname:data[i].castname,
        producername:data[i].producername,
        releasedate:data[i].releasedate,
        imagepath:data[i].imagepath,
        link:data[i].link,
        descriptionname:data[i].descriptionname,
      }); 
     
    }
  }
 
}

