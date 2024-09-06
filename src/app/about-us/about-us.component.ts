import { AppComponent } from './../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  ngOnInit() {
  AppComponent.slected("A")
  }

}
