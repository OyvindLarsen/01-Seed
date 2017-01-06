import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { UserComponent } from "./user/user.component";
import { USER_ROUTES } from "./user/user.routes";

const APP_ROUTES: Routes = [
 { path: '', redirectTo: '/user', pathMatch: 'full' },
 { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
 { path: 'user', component: UserComponent, children: USER_ROUTES}

];

export const routing = RouterModule.forRoot(APP_ROUTES);