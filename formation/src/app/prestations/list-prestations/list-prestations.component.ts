import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public first: string;
  constructor() {
    this.first = 'Hello ';
   }

  ngOnInit() {
  }

}
