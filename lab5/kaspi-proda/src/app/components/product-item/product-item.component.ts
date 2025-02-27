import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<void>();
  @Output() likeProduct = new EventEmitter<number>(); // Добавил это событие

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

  deleteItem() {
    this.delete.emit();
  }

  like() {
    this.likeProduct.emit(this.product.id); // Генерируем событие с ID продукта
  }
}
