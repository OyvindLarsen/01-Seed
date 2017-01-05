import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";
import { UserComponent } from "./user/user.component";


const APP_ROUTES: Routes = [
 { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
 { path: 'messages', component: MessagesComponent },
 { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES },
 { path: 'user', component: UserComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);