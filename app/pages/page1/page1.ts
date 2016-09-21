import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Scraper } from '../../providers/scraper/scraper';

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  providers:[Scraper]
})
export class Page1 {

  private res:any;
  private errorMessage:any;

  constructor(public navCtrl: NavController, private scraper: Scraper) {
    // this.scraper.httpCall("weekly","javascript")
    //       .subscribe(
    //         res =>  {this.res = res; this.errorMessage = ''},
    //         err =>  {this.res = {};  this.errorMessage = <any>err});
    //
    // console.log(this.res);
    this.loadData();
  }

  loadData(){
  this.scraper.load()
  .then(data => {
    this.res = data;
    console.log(this.res);
  });
}




}
