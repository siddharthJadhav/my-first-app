import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName = 'sid';
  showingParagraph = false;
  logs: number[] = [];
  index = 0;
  hideUnlessDirective = true;

  createLog() {
    this.showingParagraph = !this.showingParagraph;
    this.index++ ;
    this.logs.push(this.index);
  }

  ngOnInit() {
    // const that = this;
    // setInterval(() => {
    //   that.hideUnlessDirective = !that.hideUnlessDirective;
    // }, 1000);
  }

}
