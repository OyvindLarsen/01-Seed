import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { User } from './user.model';

import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from  "../errors/error.service";



@Injectable()
export class AuthService {
	constructor(private http: Http, private errorService: ErrorService) {}

	signup(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
			return this.http.post('http://localhost:3000/user', body, {headers: headers})
				.map((response: Response) => response.json())
				.catch((error: Response) => {
					this.errorService.handleError(error.json());
					return Observable.throw(error.json());
				});
	}

	signin(user: User) {
		const body = JSON.stringify(user);
		const headers = new Headers({'Content-Type': 'application/json'});
			return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
				.map((response: Response) => response.json())
				.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}
	logout() {
		localStorage.clear();
	}

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}

	getUser() {
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.get('http://localhost:3000/user/profile' + token)
			.map((response: Response) => {
				const user = response.json().obj;
				const userU = new User(user.email, user.password, user.firstName, user.lastName);
				return userU;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}
}

