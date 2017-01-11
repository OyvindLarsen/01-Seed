import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { User } from './user.model';

import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from  "../errors/error.service";



@Injectable()
export class UserService {
	constructor(private http: Http, private errorService: ErrorService) {}

	getUser() {
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.get('http://localhost:3000/user/profile' + token)
			.map((response: Response) => {
				const user = response.json().obj;
				const userU = new User(user.email, user.password, user._id, user.profilePic, user.firstName, user.lastName, user.follow);
				return userU;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}

	saveProfilePic(data) {
		const body = JSON.stringify(data);
		const headers = new Headers({'Content-type': 'application/json'});
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.patch('http://localhost:3000/user/uploaded' + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}


}