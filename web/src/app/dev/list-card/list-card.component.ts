import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  constructor() { }

  @Input () avatarUrl:"";
  @Input () name:"";
  @Input () city:"";
  @Input () technologies:"";
  @Input () linkGit:"";
  
  
  ngOnInit(): void {
  }

  handleUpdateCard() {
  }

  handleExcludeCard() {
    console.log("Exclude");
  }
}
