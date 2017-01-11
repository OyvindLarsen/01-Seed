import { Component, OnInit } from '@angular/core';
import { UsersOutputComponent } from "../users/users-output.component";
import { UsersService } from "../users/users.service";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Component({
	selector: 'users-db',

	template: `
	<div class="col-md-12">
		<div *ngFor="let user of users | filter:userFollow">
			<div class="container-fluid" style="margin-bottom: 20px;">
	<div class="row panel">
		<div class="col-md-4 bg_blur ">
    	    <a class="follow_btn hidden-xs" (click)="unFollow(user)" >unFollow</a>
		</div>
        <div class="col-md-8  col-xs-12">
           <img src="http://localhost:3000/static/{{user.profilePic}}" class="img-thumbnail picture hidden-xs" />
           <img src="http://localhost:3000/static/{{user.profilePic}}" class="img-thumbnail visible-xs picture_mob" />
           <div class="header">
                <h2>{{ user.firstName }} {{ user.lastName }}</h2>
                <h4>Web Developer</h4>
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</span>
           </div>
        </div>
    </div>   
    
	<div class="row nav">    
        <div class="col-md-4"></div>
        <div class="col-md-8 col-xs-12" style="margin: 0px;padding: 0px;">
            <div class="col-md-4 col-xs-4 well"><i class="glyphicon glyphicon-th-list"></i> 16</div>
            <div class="col-md-4 col-xs-4 well"><i class="glyphicon glyphicon-star"></i>  14</div>
            <div class="col-md-4 col-xs-4 well"><i class="glyphicon glyphicon-thumbs-up"></i>  26</div>
        </div>
    </div>
</div>

		</div> 

	</div> 
	


	`,
	styles: [`
	.well {
      margin-top:-20px;
      background-color:#007FBD;
      border:2px solid #0077B2;
      text-align:center;
      cursor:pointer;
      font-size: 25px;
      padding: 15px;
      border-radius: 0px !important;
      color:white;
  }

  .well:hover {
      margin-top:-20px;
      background-color:#0077B2;
      border:2px solid #0077B2;
      text-align:center;
      cursor:pointer;
      font-size: 25px;
      padding: 15px;
      border-radius: 0px !important;
      border-bottom : 2px solid rgba(97, 203, 255, 0.65);
  }





  .bg_blur
  {
      background-image:url('/img/logo_uten_bakgrunn.svg');
      background-size: 92%;
      background-repeat: no-repeat;
      height: 300px;
      
     
  }

  .follow_btn {
      text-decoration: none;
      position: absolute;
      left: 35%;
      top: 42.5%;
      width: 35%;
      height: 15%;
      background-color: #007FBE;
      padding: 10px;
      padding-top: 6px;
      color: #fff;
      text-align: center;
      font-size: 20px;
      border: 4px solid #007FBE;
  }

  .follow_btn:hover {
      text-decoration: none;
      position: absolute;
      left: 35%;
      top: 42.5%;
      width: 35%;
      height: 15%;
      background-color: #007FBE;
      padding: 10px;
      padding-top: 6px;
      color: #fff;
      text-align: center;
      font-size: 20px;
      border: 4px solid rgba(255, 255, 255, 0.8);
  }

  .header{
      color : #808080;
      margin-left:15%;
      margin-top:70px;
  }

  .picture{
      height:150px;
      width:150px;
      position:absolute;
      top: 75px;
      left:-75px;
  }

  .picture_mob{
      position: absolute;
      width: 35%;
      left: 35%;
      bottom: 70%;
  }

  .btn-style{
      color: #fff;
      background-color: #007FBE;
      border-color: #adadad;
      width: 33.3%;
  }

  .btn-style:hover {
      color: #333;
      background-color: #3D5DE0;
      border-color: #adadad;
      width: 33.3%;
     
  }


  @media (max-width: 767px) {
      .header{
          text-align : center;
      }
  
      .nav{
          margin-top : 30px;
      }
  }
	`]
	
})

export class UserContacts implements OnInit {
	users: User[];
	user: User;
	userFollow: User;
	

	constructor(private usersService: UsersService, private userService: UserService) {}

	unFollow(data) {
		this.usersService.unfollowUser(data)
        	 .subscribe(
                result => console.log(result)
            );
		}

		ngOnInit() {
		this.usersService.getUsers()
			.subscribe(
				(users: User[]) => {
					this.users = users;
					
				}
			);

		this.userService.getUser()
			 .subscribe(
				(user: User)  => {
					this.user = user;
					console.log(this.user);
					this.userFollow = this.user;


				}
			);
		
		}
		

}
