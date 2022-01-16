import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  bannerOpen: boolean = true;
  message: string = "We are currently closed due to a water main break. Stay tuned for information on when we will re-open for service.";

  constructor() { }

  ngOnInit(): void {
  }

  closeBanner(){
    this.bannerOpen = false;
  }

}
