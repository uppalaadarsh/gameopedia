import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import {Router} from '@angular/router'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  modelForm: FormGroup;
  submitted = false;

  moviename:string;
  directorname:string;
  castname:string;
  producername:string;
  descriptionname:string;
  releasedate:string;
  distributor:string;
  imagepath:  any= '';
  link:any;

  file:any;
  // display='none';
 existing=[];
  characters:Array<{ moviename:string,
                     directorname:string,
                     castname:string,
                     producername:string,
                     descriptionname:string;
                     distributor:string;
                     releasedate:string,
                     imagepath:ImageData,
                     link:any
                    }>=[];
  
  constructor(private formBuilder: FormBuilder, public router:Router) { }
  
  ngOnInit() {
    // var data = JSON.parse(localStorage.getItem('stored'));
    
    // for (var i = 0; i < data.length; i++) {
    //   this.existing.push({a:data[i].moviename,
    //     b:data[i].directorname,
    //     c:data[i].castname,
    //     d:data[i].producername,
    //     e:data[i].releasedate,
    //     f:data[i].imagepath,
    //     g:data[i].link,
    //     h:data[i].descriptionname,
    //     i:data[i].distributor
    //   }); 
    // }
    this.modelForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      directorName: ['', Validators.required],
      castName: ['', Validators.required],
      producerName: ['', Validators.required],
      descriptionname: ['', Validators.required],
      distributor:['',Validators.required],
      releasedate: ['', Validators.required],
      imagepath: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  get f() { return this.modelForm.controls; }

  nav(){
    this.router.navigate(['/overview']);
  }
 

  onSubmit(){
    this.submitted = true;
    if(this.modelForm.invalid){
      return;
    } 
    this.characters.push({moviename:this.moviename,
                          directorname:this.directorname,
                          castname:this.castname,
                          producername:this.producername,
                          descriptionname:this.descriptionname,
                          distributor:this.distributor,
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
                        this.descriptionname="";
                        this.distributor="";
                        let data = this.characters; 
                        localStorage.setItem("stored", JSON.stringify(data));
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
