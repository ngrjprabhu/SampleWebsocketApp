import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Feeds } from '../models/feeds';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  feeds = this.socket.fromEvent<string[]>('feeds');
  summary = this.socket.fromEvent<string[]>('summary');

  constructor(private socket: Socket) { }

  getFeeds() {
    this.socket.emit('getTrackingFeeds');
  }

  getSummary() {
    this.socket.emit('getTrackingSummary');
  }
}
