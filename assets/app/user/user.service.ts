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
				const userU = new User(user.email, user.password, user.firstName, user.lastName);
				return userU;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}
}
 
