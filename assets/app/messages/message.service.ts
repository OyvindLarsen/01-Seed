import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from  "../errors/error.service";



@Injectable()

export class MessageService {
	private messages: Message[] = [];
	messageIsEdit = new EventEmitter<Message>();

	constructor(private http: Http, private errorService: ErrorService) {}

	addMessage(message: Message) {
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-type': 'application/json'});
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
			.map((response: Response) => {
				const result = response.json();
				const message =  new Message(result.obj.content, result.obj.user.firstName, result.obj.user.lastName, result.obj._id, result.obj._id, result.obj.title);
				console.log(message);
				this.messages.push(message);
				return message;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}

	getMessages() {
		return this.http.get('http://localhost:3000/message')
			.map((response: Response) => {
				const messages = response.json().obj;
				let transformedMessages: Message[] = [];
				for (let message of messages) {
					transformedMessages.push(new Message(message.content, message.user.firstName, message.user.lastName, message._id, message.user._id, message.title));
				}
				this.messages = transformedMessages;
				return transformedMessages;
			})
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}

	editMessage(message: Message) {
		this.messageIsEdit.emit(message);
	}



	updateMessage(message: Message) {
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-type': 'application/json'});
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}		
	

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
		const token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
		return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
			.map((response: Response) => response.json())
			.catch((error: Response) => {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json());
			});
	}
}