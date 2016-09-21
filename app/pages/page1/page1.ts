import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Scraper } from '../../providers/scraper/scraper';
import * as $ from 'jquery';

@Component({
  templateUrl: 'build/pages/page1/page1.html',
  providers:[Scraper]
})
export class Page1 {

  constructor(public navCtrl: NavController, private scraper: Scraper) {
    this.loadData();
  }

  loadData(){
  this.scraper.load("weekly","javascript")
    .then(data => {
      console.log(data)
      this.parseRepos(data);
    });
  }

private parseRepos = function (data) {

      //var tmp = document.implementation.createHTMLDocument("title");
      //tmp.body.innerHTML = data._body;
      //tmp = data._body;

      //var items = $(tmp.body.children).find('.list');
      $(data._body).filter(function( index ) {
        return $( ".repo-list", this ).length === 1;
      })
    .css( "background-color", "red" );
      //var items = $(data._body).find('.repo-list');

      var repos = [];
      // for (var i = 0; i < items.length; i++) {
      //     var repo = {
      //         Name: $(items[i]).children('a')[0].innerText,
      //         Date: $(items[i]).children('strong')[0].innerText
      //     };
      //     repos.push(repo);
      // }

      return repos;
  }


}
