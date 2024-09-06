import { AppComponent } from './../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ngOnInit() {
    AppComponent.slected("S")
    }
  
}
