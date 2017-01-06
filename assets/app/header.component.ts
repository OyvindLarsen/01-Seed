import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserHeader } from "./user/user.header.component";
import {DropdownModule} from "ng2-dropdown";

@Component({
	
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [`
    	#headerLogo {
    		height: 40px;
    		margin-left: 10px;
    		margin-top: 5px;
    	}
    	.navbar-header {
    		height:100%;
    	}
    	h4{
    		padding-top: 6px;
    		padding-left: 7px;
    	}
        .navbar {
            height:50px;
        }
    `]

})


export class HeaderComponent  {

	constructor(private authService: AuthService) {}



	isLoggedIn() {
		return this.authService.isLoggedIn();
	}

}