import { Component } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent {

  curdrice='/assets/image/curdrice.jpeg'
  friedrice='/assets/image/friedrice.jpeg'
  mushroom='/assets/image/mushroombriyani.jpeg'
  sambar='/assets/image/sambar.jpeg'

  curdPrice=45
  friedPrice=120
  mushroomPrice=230
  sambarPrice=80
}
