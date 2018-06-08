import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatGridListModule } from '@angular/material';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AuthenticateComponent } from './logincomponent/authenticate';
import { LoginComponent } from './logincomponent/login';
import { RegisterComponent } from './logincomponent/register';
import { ResetpasswordComponent } from './logincomponent/resetpassword';
import { MainComponent } from './maincomponent/main';
import { AboutComponent } from './maincomponent/about';
import { CodeshopComponent } from './maincomponent/codeshop';
import { BlogComponent } from './maincomponent/blog';
import { ContactComponent } from './maincomponent/contact';
import { HomeComponent } from './maincomponent/home';
import { PortfolioComponent } from './maincomponent/portfolio';
import { ResumeComponent } from './maincomponent/resume';

import { MediaPipe } from './utils/index';
import { RouteNavigationComponent } from './utilcomponents/index';
import { ApiService, GlobalDataService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    MainComponent,
    AboutComponent,
    CodeshopComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    MediaPipe,
    RouteNavigationComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,MatGridListModule,
    routing
  ],
  providers: [ 
    ApiService,
    GlobalDataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
