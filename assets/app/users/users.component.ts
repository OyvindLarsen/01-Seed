import { Component, OnInit } from '@angular/core';
import { UsersOutputComponent } from "./users-output.component";
import { UsersService } from "./users.service";
import { User } from "../user/user.model";


@Component({
	selector: 'users-db',
	templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
	users: User[];

	constructor(private usersService: UsersService) {

	}

		ngOnInit() {
		this.usersService.getUsers()
			.subscribe(
				(users: User[]) => {
					this.users = users;
					}
			);
		}
}
