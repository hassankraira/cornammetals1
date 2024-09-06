import { AppComponent } from './../app.component';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   
  ngOnInit() {
    this.checkScroll();
    this.checkScroll2()

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.checkScroll2()
  }
  checkScroll() {
    const gridItems = document.querySelectorAll('.unvis');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    gridItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible');
      }
    });
  }
  checkScroll2() {
    const gridItems = document.querySelectorAll('.ffall');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    gridItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top + scrollTop+300;
      const itemHeight = item.clientHeight;

      if (scrollTop > itemTop - windowHeight * 0.8 && scrollTop < itemTop + itemHeight * 0.8) {
        item.classList.add('visible2');
      }
    });
  }
}
