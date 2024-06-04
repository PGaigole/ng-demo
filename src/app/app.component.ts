import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPromoComponent } from './product-promo/product-promo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductPromoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-demo';
}
