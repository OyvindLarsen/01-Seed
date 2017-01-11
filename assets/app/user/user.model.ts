export class User {
	constructor(public email: string, 
				public password: string,
				public userId?: string,
				public profilePic?: string,
				public firstName?: string,
				public lastName?: string,
				public follow?: string[]){}
}