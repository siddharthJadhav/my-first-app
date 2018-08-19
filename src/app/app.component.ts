import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'sid';
  showingParagraph = false;
  logs: number[] = [];
  index = 0;

  createLog() {
    this.showingParagraph = !this.showingParagraph;
    this.index++ ;
    this.logs.push(this.index);
  }

}
