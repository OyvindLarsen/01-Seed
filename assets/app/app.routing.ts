import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { UserComponent } from "./user/user.component";
import { USER_ROUTES } from "./user/user.routes";
import { UsersComponent } from "./users/users.component";


const APP_ROUTES: Routes = [
 { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
 { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
 { path: 'user', component: UserComponent, children: USER_ROUTES},
 { path: 'users', component: UsersComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);