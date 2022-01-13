import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  orderOut(){
    this.router.navigate([""]).then(result => {
      window.location.href = 'https://chick-fil-a.com/order';
   });
  }

  openMenu(){
    this.router.navigate(["/menu"]);
  }

  openContact(){
    this.router.navigate(["/contact"]);
  }

  openHome(){
    this.router.navigate([""]);
  }


}
