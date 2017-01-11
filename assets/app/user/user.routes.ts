import { Routes } from "@angular/router";
import { MessagesComponent } from "../messages/messages.component";
import { UserFeed } from "./user.feed.component";
import { UserSettings } from "./user.setting.component";
import { UserContacts } from "./user.contacts.component";

export const USER_ROUTES: Routes = [
 { path: '', redirectTo: 'feed', pathMatch: 'full' },
 { path: 'feed', component: UserFeed },
 { path: 'messages', component: MessagesComponent },
 { path: 'settings', component: UserSettings },
 { path: 'contacts', component: UserContacts }
 

];

