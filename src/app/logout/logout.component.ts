import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private route:Router){}

  
// loggingout(){

//   alert('Logging out ,Please visit us again!'); 
//   this.route.navigateByUrl('home');
// }
 
  

}
