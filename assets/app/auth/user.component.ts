import { Component, OnInit, Input} from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
	
	selector: 'app-profile',
	templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
	user: User;

	
	

	constructor(private authService: AuthService) {

    }
	
	ngOnInit() {
		this.authService.getUser()
			 .subscribe(
				(user: User)  => {
					this.user = user;console.log(user.firstName);
				}
			);
		}
	}