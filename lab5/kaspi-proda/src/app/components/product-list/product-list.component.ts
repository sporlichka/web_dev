import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() likeProduct = new EventEmitter<number>(); // Прокидываем лайк в AppComponent
  @Output() delete = new EventEmitter<number>();

  removeProduct(productId: number): void {
    this.delete.emit(productId);
  }

  likeProductHandler(productId: number): void {
    this.likeProduct.emit(productId); // Прокидываем событие наверх
  }
}
