import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../loginservice/login.service";

@Injectable({
  providedIn:'root'
})

export class UserGuard implements CanActivate{

  constructor(private loginservice:LoginService , private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(this.loginservice.isloggedIn() && this.loginservice.getUserRole() == "NORMAL"){
        return true;
      }
       this.router.navigate(['login'])
       return false;
    }
    
    }

    
  
  
