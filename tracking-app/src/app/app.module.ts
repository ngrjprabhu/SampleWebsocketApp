import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { TrackingFeedComponent } from './components/tracking-feed/tracking-feed.component';
import { SummaryComponent } from './components/summary/summary.component';
import {OrderByPipe} from './order-by.pipe';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    TrackingFeedComponent,
    SummaryComponent,
    OrderByPipe 
  ],
  imports: [
    BrowserModule,
	  SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
