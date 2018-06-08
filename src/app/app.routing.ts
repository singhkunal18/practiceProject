import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './maincomponent/main/index';
import { HomeComponent } from './maincomponent/home/index';
import { CodeshopComponent } from './maincomponent/codeshop/index';
import { PortfolioComponent } from './maincomponent/portfolio/index';
import { AboutComponent } from './maincomponent/about/index';
import { ResumeComponent } from './maincomponent/resume/index';
import { BlogComponent } from './maincomponent/blog/index';
import { ContactComponent } from './maincomponent/contact/index';
import { AuthenticateComponent } from './logincomponent/authenticate/index';
import { LoginComponent } from './logincomponent/login/index';
import { RegisterComponent } from './logincomponent/register/index';
import { ResetpasswordComponent } from './logincomponent/resetpassword/index';


const appRoutes: Routes = [
  { path: 'main', component: MainComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full'},
			{ path: 'home', component: HomeComponent },
      { path: 'codeshop', component: CodeshopComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
		]
	},	
	{ path: 'authenticate', component: AuthenticateComponent,
      children: [
        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'passwordreset', component: ResetpasswordComponent }
       ]
  },
    // otherwise redirect to home
  { path: '**', redirectTo: 'main' }
];

export const routing = RouterModule.forRoot(appRoutes);