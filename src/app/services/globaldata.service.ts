import { Injectable } from '@angular/core';

interface ApplicationObj {
  [id: string]: any;
}

@Injectable()
export class GlobalDataService {  
  applicationObj: ApplicationObj = {};    
}
