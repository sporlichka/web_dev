import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true, // если компонент standalone
  imports: [CommonModule], // Добавляем сюда CommonModule
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;

  shareViaWhatsApp(): void {
    const url = `https://wa.me/?text=${this.product.link}`;
    window.open(url);
  }

  shareViaTelegram(): void {
    const url = `https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;
    window.open(url);
  }

  changeImage(img: string): void {
    this.product.image = img;
  }

  like(): void {
    this.product.likes += 1;
  }

  unlike(): void {
    this.product.likes -= 1;
  }
}
