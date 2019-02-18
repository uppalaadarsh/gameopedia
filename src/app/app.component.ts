import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ViewChild, ElementRef } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modelForm: FormGroup;
  submitted = false;
  moviename:string;
  directorname:string;
  castname:string;
  producername:string;
  releasedate:string;
  imagepath:  any= '';
  file:any;
  link:any;
  // display='none';
  characters:Array<{ moviename:string,
                     directorname:string,
                     castname:string,
                     producername:string,
                     releasedate:string,
                     imagepath:ImageData,
                     link:any
                    }>=[];
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      directorName: ['', Validators.required],
      castName: ['', Validators.required],
      producerName: ['', Validators.required],
      releasedate: ['', Validators.required],
      imagepath: ['', Validators.required],
      link: ['', Validators.required]
    });
  }
  get f() { return this.modelForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.modelForm.invalid){
      return;
    } 
    this.characters.push({moviename:this.moviename,
                          directorname:this.directorname,
                          castname:this.castname,
                          producername:this.producername,
                          releasedate:this.releasedate,
                          imagepath:this.imagepath,
                          link:this.link
                        }); 
                        this.moviename = "";
                        this.producername = "";
                        this.directorname = "";
                        this.castname="";
                        this.releasedate="";
                        this.imagepath;
                        this.link="";
                  
                        
                        
  }
  onFileChanged(event) {
    this.file = event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
     this.imagepath = (<FileReader>event.target).result;
   }
  }
}

