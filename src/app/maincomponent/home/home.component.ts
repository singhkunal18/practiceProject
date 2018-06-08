import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd,Event } from '@angular/router';
import { ApiService, GlobalDataService } from '../../services';
import { MediaPipe } from '../../utils';


@Component({
    templateUrl:'home.component.html',
    styleUrls:['home.component.css'],
    providers:[MediaPipe]
})

export class HomeComponent {

    applicationTitle:String;
    modulesGroup:any;
	mainContainerHeight: any;
    headerRoutesClass:string = 'header-module-routes';
    bgImageUrl:any;

	constructor(
        private router:Router,
        private apiService:ApiService,
        private gd:GlobalDataService,
        private mediaPipe: MediaPipe
    )
	{	
        this.mainContainerHeight = window.innerHeight; 
        
        this.applicationTitle = this.gd.applicationObj['ApplicationTitle'];
        this.bgImageUrl = this.mediaPipe.mediaDict['car'];
        this.modulesGroup = this.apiService.modulesGroup;        
	}    
}

