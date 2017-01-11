import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from "../user/user.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from  "../errors/error.service";



@Injectable()

export class UsersService {
	private users: User[] = [];
	
	constructor(private http: Http, private errorService: ErrorService) {}

	getUsers() {
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.get('http://localhost:3000/users' + token)
			.map((response: Response) => {
				const users = response.json().obj;
				let transformedUsers: User[] = [];
				for (let user of users) {
							
					transformedUsers.push(new User(user.email, user.password, user._id, user.profilePic, user.firstName, user.lastName, user.follow));
					
				}

				this.users = transformedUsers;
				return transformedUsers;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}

	followUser(user: User) {
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
			return this.http.post('http://localhost:3000/users/follow' + token, body, {headers: headers})
				.map((response: Response) => response.json())
				.catch((error: Response) => {
					this.errorService.handleError(error.json());
					return Observable.throw(error.json());
			});

	}
	unfollowUser(user: User) {
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.patch('http://localhost:3000/users/follow' + token, body, {headers: headers})
				.map((response: Response) => response.json())
				.catch((error: Response) => {
					this.errorService.handleError(error.json());
					return Observable.throw(error.json());
			});

	}


 
}