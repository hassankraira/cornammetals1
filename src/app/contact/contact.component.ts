import { AppComponent } from './../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ngOnInit() {
    AppComponent.slected("C")
    }
  
}
