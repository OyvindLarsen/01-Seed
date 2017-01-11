import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
	name: 'filter',
	pure: false
})

export class ContactsPipe implements PipeTransform {
  transform (contactUsers: Array<any>, user: User):any {
  	
  	
  	if (user === undefined) return contactUsers;
  	if (contactUsers === undefined) return contactUsers;
  	
  	
  	return contactUsers.filter(contactUser => {
	       for (let arg in contactUser.follow) {
	            if (contactUser.follow[arg] == user.userId) {
	            	return true;
	           }
	           	
	       }
	       return false;
	    });

  }
}

