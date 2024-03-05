import { Component} from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  // local=inject(LOCALE_ID);

 languagelist=[
  {code:'fr' , label:'French'},
  {code:'en',label:'English'}
 ]
  //  lang='French';
  //  code='src/locale/messages.fr.xlf';
  //  langChange(){
  //   this.code;
  //  }
   

  // "i18n":{
  //   "sourceLocale":"en-US",
  //   "locales": {
  //     "fr":{
  //       "translation":"src/locale/messages.fr.xlf"
  //     }
  //   }
  // },

  // "localize":true,


  // "fr":{
  //   "localize":["fr"]
  // },

  // "fr":{
  //   "browserTarget":"sample-app:build:development,fr"}

}
