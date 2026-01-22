import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yoga',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})
export class YogaComponent implements OnInit, AfterViewInit {
  // ✅ Yoga slider images
  yogaImages: string[] = [
    
    'assets/images/yoga2.jpg',
    'assets/images/yoga3.jpg',
    'assets/images/yoga4.jpg',
    'assets/images/yoga5.jpg',
    'assets/images/yoga6.jpg',
    'assets/images/yoga7.jpg',
    'assets/images/yoga8.jpg',
    'assets/images/yoga9.jpg',
    'assets/images/yoga10.jpg'
  ];

  // ✅ Cloned array for seamless looping
  displayedImages: string[] = [];

  // ✅ Card images for “Our Yoga Sessions” section
  yogaCards = [
    {
      title: 'Pranayama',
      description: 'Enhance lung capacity and mental focus through ancient breathing techniques.',
      image: 'assets/images/pranayama.jpg',
      link: 'https://en.wikipedia.org/wiki/Pranayama'
    },
    {
      title: 'Surya Namaskar',
      description: 'Boost flexibility and energy through 12 powerful postures of Sun Salutation.',
      image: 'assets/images/suryanamaskar.jpg',
      link: 'https://en.wikipedia.org/wiki/Surya_Namaskar'
    },
    {
      title: 'Guided Meditation',
      description: 'Relax your mind and find peace through focused meditation practices.',
      image: 'assets/images/meditation.jpg',
      link: 'https://en.wikipedia.org/wiki/Meditation'
    }
  ];

  // ✅ Slider config
  currentSlide = 0;
  slideIntervalMs = 10000; // 10s
  transitionMs = 1000; // 1s transition

  @ViewChild('slidesTrack', { static: true }) slidesTrack!: ElementRef<HTMLDivElement>;

  private timerId: any;
  private transitionEndUnlisten: (() => void) | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Clone first image at the end for infinite looping
    this.displayedImages = [...this.yogaImages, this.yogaImages[0]];
  }

  ngAfterViewInit() {
    const trackEl = this.slidesTrack.nativeElement;

    // Set initial translate
    this.setTranslate(0, false);

    // Handle transition end (loop reset)
    this.transitionEndUnlisten = this.renderer.listen(trackEl, 'transitionend', () => {
      if (this.currentSlide === this.displayedImages.length - 1) {
        this.renderer.setStyle(trackEl, 'transition', 'none');
        this.currentSlide = 0;
        this.setTranslate(this.currentSlide, false);
        void trackEl.offsetHeight; // Force reflow
        this.renderer.setStyle(trackEl, 'transition', `transform ${this.transitionMs}ms linear`);
      }
    });

    // Auto-slide
    this.timerId = setInterval(() => this.nextSlide(), this.slideIntervalMs);
  }

  private nextSlide() {
    const trackEl = this.slidesTrack.nativeElement;
    this.renderer.setStyle(trackEl, 'transition', `transform ${this.transitionMs}ms linear`);
    this.currentSlide = (this.currentSlide + 1) % this.displayedImages.length;
    this.setTranslate(this.currentSlide, true);
  }

  private setTranslate(index: number, withTransition: boolean) {
    const trackEl = this.slidesTrack.nativeElement;
    this.renderer.setStyle(trackEl, 'transform', `translateX(-${index * 100}%)`);
  }

  // ✅ Open links for "Learn More"
  openLink(url: string) {
    window.open(url, '_blank');
  }

  // ✅ Clean up interval and listeners
  ngOnDestroy() {
    if (this.timerId) clearInterval(this.timerId);
    if (this.transitionEndUnlisten) this.transitionEndUnlisten();
  }
}
