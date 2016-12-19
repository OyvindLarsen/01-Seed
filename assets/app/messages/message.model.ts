export class Message {
	content: string;
	firstName: string;
	lastName: string;
	messageId?: string;
	userId?: string;
	title?: string;



	constructor(content: string, firstName: string, lastName: string, messageId?: string, userId?: string, title?: string) {
		this.content = content;
		this.firstName = firstName;
		this.lastName = lastName;
		this.messageId = messageId;
		this.userId = userId;
		this.title = title;

	}
}
