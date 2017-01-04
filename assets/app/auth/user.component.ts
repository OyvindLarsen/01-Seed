import { Component, OnInit, Input} from '@angular/core';
import { User } from './user.model';
import { AuthService } from './auth.service';

@Component({
	
	selector: 'app-profile',
	templateUrl: 'user.component.html'
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

	handleUpload(data): void {
	    if (data && data.response) {
	      data = JSON.parse(data.response);
	      this.uploadFile = data;
	    }
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
	
	

	constructor(private authService: AuthService) {

    }
	
	ngOnInit() {
		this.authService.getUser()
			 .subscribe(
				(user: User)  => {
					this.user = user;

				}
			);
		}
	}