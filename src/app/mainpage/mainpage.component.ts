import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public userName: string | null;

  ngOnInit() {
    this.userName = sessionStorage.getItem('user');
  }
}