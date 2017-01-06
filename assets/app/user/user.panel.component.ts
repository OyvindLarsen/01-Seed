import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
	selector: 'user-panel',
	templateUrl: 'user.panel.component.html',
	styles: [`
	    	#profilePic {
	    				
	    		height:150px;
	    		width:150px;
	    		border-radius: 50%;
	    		display:block;
   				margin: auto;
	    	}


		

			/* Profile container */
			.profile {
			  margin: 20px 0;
			}

			/* Profile sidebar */
			.profile-sidebar {
			  padding: 20px 0 10px 0;
			  background: #fff;
			}


			.profile-usertitle {
			  text-align: center;
			  margin-top: 20px;
			}

			.profile-usertitle-name {
			  color: #5a7391;
			  font-size: 16px;
			  font-weight: 600;
			  margin-bottom: 7px;
			}

			.profile-usertitle-job {
			  text-transform: uppercase;
			  color: #5b9bd1;
			  font-size: 12px;
			  font-weight: 600;
			  margin-bottom: 15px;
			}

			.profile-userbuttons {
			  text-align: center;
			  margin-top: 10px;
			}

			.profile-userbuttons .btn {
			  text-transform: uppercase;
			  font-size: 11px;
			  font-weight: 600;
			  padding: 6px 15px;
			  margin-right: 5px;
			}

			.profile-userbuttons .btn:last-child {
			  margin-right: 0px;
			}
			    
			.profile-usermenu {
			  margin-top: 30px;
			}

			.profile-usermenu ul li {
			  border-bottom: 1px solid #f0f4f7;
			}

			.profile-usermenu ul li:last-child {
			  border-bottom: none;
			}

			.profile-usermenu ul li a {
			  color: #93a3b5;
			  font-size: 14px;
			  font-weight: 400;
			}

			.profile-usermenu ul li a i {
			  margin-right: 8px;
			  font-size: 14px;
			}

			.profile-usermenu ul li a:hover {
			  background-color: #fafcfd;
			  color: #5b9bd1;
			}

			.profile-usermenu ul li.active {
			  border-bottom: none;
			}

			.profile-usermenu ul li.active a {
			  color: #5b9bd1;
			  background-color: #f6f9fb;
			  border-left: 2px solid #5b9bd1;
			  margin-left: -2px;
			}

	
    `]
})
export class UserPanel implements OnInit {
	user: User;
	

	constructor(private userService: UserService) {}
	token = localStorage.getItem('token') 
		? '?token=' + localStorage.getItem('token')
		: '';
	ngOnInit() {
		this.userService.getUser()
			 .subscribe(
				(user: User)  => {
					this.user = user;

				}
			);
		
		

				
		}
	}
