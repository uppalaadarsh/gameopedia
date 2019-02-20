import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe, PipeTransform} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { stringify } from '@angular/core/src/util';
import { FilterPipe}  from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    OverviewComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
