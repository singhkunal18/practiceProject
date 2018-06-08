import { Component } from '@angular/core';
import { GlobalDataService, ApiService } from '../../services';

@Component({
	templateUrl:'main.component.html',
	styleUrls:['main.component.css']
})

export class MainComponent{

	mainContainerHeight: any;
	modulesGroup:any;
	bottomRoutesClass:string = 'bottom-module-routes';
	
	constructor(
		private gd:GlobalDataService,
		private apiService:ApiService
	)
	{
		this.mainContainerHeight = window.innerHeight;
		
		this.gd.applicationObj['ApplicationTitle']='Practice Project';
		this.modulesGroup = this.apiService.modulesGroup; 
	}    

	
}