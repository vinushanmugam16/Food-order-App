import { Component } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent {


  dosaImage='/assets/image/dosa.jpeg';
  idlyImage='/assets/image/idly.jpeg';
  naanImage='/assets/image/naan.jpeg';
  paneerImage='/assets/image/paneerbutter.jpeg';
  dessert='/assets/image/dessert.jpeg';

  dosaprice=75;
  idlyprice=30;
  naanprice=230;
  paneerprice=310;
  dessertprice=110;
}
