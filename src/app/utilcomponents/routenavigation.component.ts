import { Component, Input } from '@angular/core';
import { ApiService } from '../services';
import { Router } from '@angular/router';

@Component({
    selector:'route-navigator',
    templateUrl:'routenavigation.component.html',
    styleUrls:['routenavigation.component.css']
})

export class RouteNavigationComponent {
    
    @Input() routeNames:String[];
    @Input() currentRoute:any;
    @Input() selectedRoute:any;
    @Input() routeClass:any;    

    constructor(
        private router:Router
    ){}

    navigateToRoute(routeName:string){
        this.router.navigate(['main/'+routeName]);
    }
}