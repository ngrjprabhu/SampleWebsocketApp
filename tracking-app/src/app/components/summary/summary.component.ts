import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FeedsService } from 'src/app/services/feeds.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary: Observable<string[]>;

  constructor(private feedsService: FeedsService) { }

  ngOnInit() {
      this.summary = this.feedsService.summary;
    }
  
  loadSummary() {
    this.feedsService.getSummary();
  }
}
