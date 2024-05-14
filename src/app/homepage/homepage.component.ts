import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  constructor(private http: HttpClient) {
    this.getbackend();
  }

  public getbackend() {
    this.http.get('http://localhost:4000/data').subscribe((data) => {
      console.log(data);
    })
  }
}