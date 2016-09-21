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
      var repos = $(data._body).find('.repo-list').children();
      var reps = [];

       for (var i = 0; i < repos.length; i++) {

          var repo = {
              Name: $(repos[i]).find(".prefix").text() + "/" + $(repos[0]).find(".prefix").text(),
              Descrption: $(repos[i]).find(".repo-list-description").text().trim(),
              Meta: $(repos[i]).find(".repo-list-meta").text().trim().replace(/\s\s+/g, ' '),
              BuiltBy: $(repos[i]).find(".repo-list-meta").children('a').first().children("img").first().attr("src")
          };
          reps.push(repo);
       }

      return repos;
  }


}
