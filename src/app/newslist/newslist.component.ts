import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

type News = Array<{
  title: string,
  content: string,
  imagePath: string
}>;


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
})
export class NewslistComponent implements OnInit, OnDestroy {

  public news: News = [];
  private subscription: Subscription;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    // TODO: need to set config variables here
    this.subscription = this.http.get<News>('https://golden-stage.herokuapp.com/api/news').subscribe(news => {
      this.news = news;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
