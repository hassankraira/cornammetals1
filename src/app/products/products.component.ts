import { AppComponent } from './../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ngOnInit() {
    AppComponent.slected("P")
    }
  
}
