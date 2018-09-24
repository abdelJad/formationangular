import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUsers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public title: string;
 public faBars = faBars;
 public faUser = faUsers;

  constructor() {
    this.title  = 'Hello Angular';
  }

  ngOnInit() {
  }

}
