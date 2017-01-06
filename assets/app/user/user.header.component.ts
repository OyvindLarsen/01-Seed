import { Component, OnInit, Input} from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
	
	selector: 'user-header',
	template: `
		
		<img class="float-left" id="profilePic" src="//localhost:3000/user/profilepic{{token}}" alt="Profilepic"> {{user?.firstName}} {{user?.lastName}} 
		

	`,
	styles: [`
    	#profilePic {
    		position: relative;
    		top:-10px;
    		height:40px;
    		width:40px;
    		border-radius: 50%;
    		margin-right:5px;
    	}
			

    `]
})

export class UserHeader implements OnInit {
	user: User;
	

	constructor(private userService: UserService) {

    }
	token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
	ngOnInit() {
		this.userService.getUser()
			 .subscribe(
				(user: User)  => {
					this.user = user;

				}
			);
		
		

				
		}
	}