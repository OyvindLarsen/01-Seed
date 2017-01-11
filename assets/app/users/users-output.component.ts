import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { UsersService } from '../users/users.service';
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Component({
	selector: 'users-output',
	templateUrl: 'users-output.component.html',
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
export class UsersOutputComponent {
	@Input() user: User;

	constructor(private usersService: UsersService) {

	}

	follow() {

        this.usersService.followUser(this.user)
        	 .subscribe(
                result => console.log(result)
            );
       	
    }
}