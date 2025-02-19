import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  link: string;
  image: string;
  likes: number;
  gallery: string[];
  category: string;
}

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  products: Product[] = [
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

  selectedCategory: string = 'all';
  filteredProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredProducts = this.getFilteredProducts();
  }

  getFilteredProducts(): Product[] {
    if (this.selectedCategory === 'all') {
      return this.products; // Если выбрана категория "все", возвращаем все товары
    } else {
      return this.products.filter(product => product.category === this.selectedCategory);
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = this.getFilteredProducts(); // Обновляем отфильтрованный список
  }

  shareViaWhatsApp(product: Product): void {
    const url = `https://wa.me/?text=${product.link}`;
    window.open(url);
    console.log(product);
  }

  shareViaTelegram(product: Product): void {
    const url = `https://t.me/share/url?url=${product.link}&text=${product.name}`;
    window.open(url);
  }

  on(product: Product, img: string) {
    product.image = img;
  }

  Like(product: Product): void {
    product.likes += 1;
  }
  Unlike(product: Product): void{
    product.likes -= 1;
  }
}