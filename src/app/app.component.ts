import { Component, ViewChild } from '@angular/core';
import { FeedComponent } from './components/feed/feed.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(FeedComponent) feedComponent!: FeedComponent;

  onSearch(query: any): void {
    if (this.feedComponent) {
      this.feedComponent.search(query);
    }
  }
}




