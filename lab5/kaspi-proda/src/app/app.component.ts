import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Добавляем импорт компонента
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategory: string = 'all';
  products = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      description: 'Latest iPhone with A15 Bionic chip.',
      rating: 4.8,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
      ],
      category: 'smartphones'
    },
    {
      id: 2,
      name: 'Apple iPhone 13',
      description: 'Latest iPhone with A15 Bionic chip.',
      rating: 4.8,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h1c/64206212857886.jpg?format=gallery-medium'
      ],
      category: 'smartphones'
    },
    {
      id: 4,
      name: 'Lenovo Legion Phone Duel 2',
      description: 'A gaming smartphone with powerful specs.',
      rating: 4.5,
      likes: 0,
      link: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16-32-gb-ssd-1000-gb-bez-os-16ahp9-83dh005rrk-119935984/?c=750000000',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/h56/86158174289950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h7f/86158174355486.jpg?format=gallery-medium'
      ],
      category: 'laptops'
    }
  ];


  getFilteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
