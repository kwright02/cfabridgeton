import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  doc = "../../assets/lunch.pdf";

  windowScrolled: boolean = false;
  
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
      var cs = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(cs)
  }

  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 30));
          }
      })();
  }

  scrollToBreakfast(){
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll < 2000) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll + (2000/30));
      } else {
        console.log(currentScroll);
      }
  })();
  }

  ngOnInit(): void {
  }

}
