import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private user: UserService) { }
  public userDetail: any = [];
  public imgUrl = '/assets/image/profile.png';
  public address: string | null;

  ngOnInit() {
    this.user.getLoginUser()
      .subscribe((data:any) => {
        this.userDetail=data;
        this.userDetail = data.filter((val: { username: string | null; }) => val.username == sessionStorage.getItem('user'));
        this.address = sessionStorage.getItem('address');
      })
  }
}