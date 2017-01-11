import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { UserComponent } from "./user/user.component";
import { AuthService } from "./auth/auth.service";

import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { UserService } from "./user/user.service";
import { Ng2UploaderModule } from 'ng2-uploader';
import { UserHeader } from "./user/user.header.component";
import { DropdownModule } from "ng2-dropdown";
import { UserPanel } from "./user/user.panel.component";
import { UserFeed } from "./user/user.feed.component";
import { UserSettings } from "./user/user.setting.component";
import { UsersComponent } from "./users/users.component";
import { UsersOutputComponent } from "./users/users-output.component";
import { UsersService } from "./users/users.service";
import { UserContacts } from "./user/user.contacts.component";
import { ContactsPipe } from "./user/user-contacts.pipe";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ErrorComponent,
        UserComponent,
        UserHeader,
        UserPanel,
        UserSettings,
        UserFeed,
        UsersComponent,
        UsersOutputComponent,
        UserContacts,
        ContactsPipe
        


    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing, 
        ReactiveFormsModule, 
        HttpModule,
        Ng2UploaderModule,
        DropdownModule
      

    ],
    providers: [AuthService, ErrorService, UserService, UsersService],
    bootstrap: [AppComponent]
})

export class AppModule {

}