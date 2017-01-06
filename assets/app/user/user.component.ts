import { Component, OnInit, Input} from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserPanel } from './user.panel.component'
import { MessagesComponent } from '../messages/messages.component'

@Component({
	
	selector: 'app-profile',
	templateUrl: 'user.component.html',
	styles: [`
			/* Profile Content */
			.profile-content {
			  padding: 20px;
			  background: #fff;
			  min-height: 460px;
			}

	`]

})

export class UserComponent implements OnInit {
	user: User;
	
	uploadFile: any;
	hasBaseDropZoneOver: 
	boolean = false;
	options: Object = {
	url: 'http://localhost:3000/user/upload'
	};
	
	sizeLimit = 2000000;
	constructor(private userService: UserService) {}

	handleUpload(data): void {
	    if (data && data.response) {
	      data = JSON.parse(data.response);
	      this.uploadFile = data;
	      this.successfullUpload();
	    }

	}

	successfullUpload() {
        this.userService.saveProfilePic(this.uploadFile[0])
		.subscribe(
			
			result => console.log(result)

		);
    }

	fileOverBase(e:any):void {
	this.hasBaseDropZoneOver = e;
	}

	beforeUpload(uploadingFile): void {
		if (uploadingFile.size > this.sizeLimit) {
		  uploadingFile.setAbort();
		  alert('File is too large');
		}
	}
	

	ngOnInit() {
		this.userService.getUser()
			 .subscribe(
				(user: User)  => {
					this.user = user;

				}
			);
		}
	}