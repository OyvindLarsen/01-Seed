import { Component } from '@angular/core';

@Component({
	
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [`
    	.author {
    		display: inline-block;
    		font-style: italic;
    		font-size:12px;
    		width:80%;

     	}
     	.config {
     		display: inline-block;
    		text-align:right;
    		font-size:12px;
    		width:19%;
     	}

    `]

})
export class HeaderComponent {

}