import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Users from 'src/app/interfaces/users.interfaces';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {

  public _userP: Observable<Users> = this.authSvc._userP;
  public admin: boolean=false;
  constructor(public authSvc: UserService, private router: Router) {

}
ngOnInit():void{
this.admin=false;
}
 
  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
  adminF(vare:boolean)
  {
    this.admin=vare;
  }


}
