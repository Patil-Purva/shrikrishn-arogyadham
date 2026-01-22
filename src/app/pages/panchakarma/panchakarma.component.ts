import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panchakarma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panchakarma.component.html',
  styleUrls: ['./panchakarma.component.css']
})
export class PanchakarmaComponent {
  slides = [
    'assets/images/panchakarma1.jpg',
    'assets/images/panchakarma2.jpg',
    'assets/images/panchakarma3.jpg'
  ];
  currentSlide = 0;

  therapies = [
    { name: 'Vamana (Therapeutic Emesis)', image: 'assets/images/vamana.jpg', description: 'Expels excess Kapha through controlled vomiting, improving respiratory and digestive health.' },
    { name: 'Virechana (Purgation Therapy)', image: 'assets/images/virechana.jpg', description: 'Cleanses Pitta toxins from the liver and intestines, promoting metabolism and skin health.' },
    { name: 'Basti (Medicated Enema)', image: 'assets/images/basti.jpg', description: 'Balances Vata dosha, improving flexibility, nerve function, and digestion.' },
    { name: 'Nasya (Nasal Administration)', image: 'assets/images/nasya.jpg', description: 'Purifies the head region and relieves sinus, migraine, and memory problems.' },
    { name: 'Raktamokshana (Bloodletting Therapy)', image: 'assets/images/raktamokshana.jpg', description: 'Removes toxins from the bloodstream, useful for skin disorders and inflammation.' }
  ];

  nextSlide() { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  prevSlide() { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; }
}
