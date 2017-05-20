import { Injectable }     from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChatActivate implements CanActivate {
        canActivate(
                    route: ActivatedRouteSnapshot, 
                    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            console.log("Can chat activate route triggered")

            var currentDate = new Date();
            var minAllowedTimeToday: Date = new Date(currentDate.setHours(9, 0, 0, 0));
            var maxAllowedTimeToday: Date = new Date(currentDate.setHours(17, 0, 0, 0));

            var isAllowed = currentDate >= minAllowedTimeToday && currentDate <= maxAllowedTimeToday;

            console.log(`Is Chat allowed: ${isAllowed}`)
            return isAllowed;
        }
}