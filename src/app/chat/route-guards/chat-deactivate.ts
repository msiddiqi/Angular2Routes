import { Injectable }     from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { ChatComponent } from "app/chat/chat.component";

@Injectable()
export class ChatDeActivate implements CanDeactivate<ChatComponent> {
        canDeactivate(
            component: ChatComponent, 
            route: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean> {

            console.log("We care about you.")

            return true;
        }
}