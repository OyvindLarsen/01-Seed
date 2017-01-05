import { Component } from '@angular/core';

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

    `]

})
export class HeaderComponent {

}