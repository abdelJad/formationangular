import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUsers} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../../../prestations/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public title: string;
 public faBars = faBars;
 public faUser = faUsers;
 public open = true;
 public log$: BehaviorSubject<string>;
 public user: string;

  constructor(private loginservice: LoginService) {
    this.title  = 'Formation Angular ';
  }

  ngOnInit() {
    this.log$ = this.loginservice.log$;
    this.user = this.loginservice.user;
  }

  public toogle() {
    this.open = !this.open;
  }

  public connexion() {
  console.log('connexion');

  }

  public login() {
    this.loginservice.login();
  }
  public logout() {
      this.loginservice.logout();
  }

}
