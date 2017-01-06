export class User {
	constructor(	public email: string, 
				public password: string,
				public profilePic?: string,
				public firstName?: string,
				public lastName?: string){}
}