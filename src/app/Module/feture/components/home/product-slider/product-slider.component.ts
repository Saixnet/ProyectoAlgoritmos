import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductCardComponent } from '../home-product-card/home-product-card.component'; // Asegúrate de usar la ruta correcta

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule, HomeProductCardComponent], // Agregar CommonModule aquí
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent {
  @Input() title: any;
  @Input() products: any;
}

