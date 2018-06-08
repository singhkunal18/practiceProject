import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, GlobalDataService } from '../../services';
import { MediaPipe } from '../../utils';

@Component({
    templateUrl:'about.component.html',
    styleUrls:['about.component.css'],
    providers:[MediaPipe]
})

export class AboutComponent {
    
    applicationTitle:String;
    modulesGroup:any;
	mainContainerHeight: any;
    headerRoutesClass:string = 'header-module-routes';
    bgImageUrl:any;

    tiles = [
        {text: 'One', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['boat']},
        {text: 'Two', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['car']},
        {text: 'Three', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['cool']},
        {text: 'Four', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['bull']},
        {text: 'Five', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['truck']},
        {text: 'Six', cols: 1, rows: 1, imageurl:this.mediaPipe.mediaDict['rock']},
      ];
    
      instaTiles=[
        {text: 'One', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta1']},
        {text: 'Two', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta2']},
        {text: 'Three', cols: 1, rows: 1, imageurl:this.mediaPipe.mediaDict['insta3']},
        {text: 'Four', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta4']},
        {text: 'Five', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta5']},
        {text: 'Six', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta6']},
        {text: 'Seven', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta7']},
        {text: 'Eight', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta8']},
        {text: 'Nine', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta9']},
        {text: 'Ten', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta10']},
        {text: 'Eleven', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta11']},
        {text: 'Twelve', cols: 1, rows: 1, imageurl: this.mediaPipe.mediaDict['insta12']}
      ];

	constructor(
        private router:Router,
        private apiService:ApiService,
        private gd:GlobalDataService,
        private mediaPipe: MediaPipe
    )
	{	
        this.mainContainerHeight = window.innerHeight; 
        
        this.applicationTitle = this.gd.applicationObj['ApplicationTitle'];
        this.bgImageUrl = this.mediaPipe.mediaDict['passion'];
        this.modulesGroup = this.apiService.modulesGroup; 
        
        
	}   
}