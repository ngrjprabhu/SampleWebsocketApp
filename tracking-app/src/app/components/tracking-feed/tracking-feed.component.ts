import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedsService } from 'src/app/services/feeds.service'

@Component({
  selector: 'app-tracking-feed',
  templateUrl: './tracking-feed.component.html',
  styleUrls: ['./tracking-feed.component.css']
})
export class TrackingFeedComponent implements OnInit {

  feeds: Observable<string[]>;

  constructor(private feedsService: FeedsService) { }

  ngOnInit() {
    this.feeds = this.feedsService.feeds;
  }

  loadFeeds() {
    this.feedsService.getFeeds();
  }

  // changeValue(param) {
  //   return 
  // }
}
