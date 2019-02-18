import {Pipe,PipeTransform} from '@angular/core';
import { stringify } from '@angular/core/src/util';

    @Pipe({ name:'filter'})
    
    export class FilterPipe implements PipeTransform{
        transform(items:any[], searchText:string){
            if(!items) return [];
            if(!searchText) return items;    
            searchText = searchText.toLowerCase();
                return items.filter(item=> {
                return JSON.stringify(item).toLowerCase().includes(searchText);
            });
        }
    }