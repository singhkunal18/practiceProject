import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{

    modulesGroup:any;

    constructor(){
        this.modulesGroup = {
            'headerModules': ['home','codeshop', 'portfolio', 'about',  'resume', 'blog', 'contact'],
            'bottomModules': ['home','codeshop', 'portfolio', 'about',  'resume', 'blog', 'press', 'contact']
        }
    }    
}