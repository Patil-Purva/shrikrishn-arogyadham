import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  addToCart() {
    const book = {
      title: 'Yog Athapasun Itiparyant',
      author: 'Dr.Prasad Sanagar',
      price: 499,
      image: 'assets/images/book1.jpg'
    };

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Book added to cart!');
  }
}
