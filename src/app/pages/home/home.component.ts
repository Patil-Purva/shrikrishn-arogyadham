import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.startSlideShow();
  }

  // ✅ Fix slideshow error with safe DOM access
  startSlideShow() {
    let slideIndex = 0;
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      if (!slides || slides.length === 0) return;

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;

      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000);
    };

    setTimeout(showSlides, 0);
  }

  // ✅ Add smooth scrolling to “Explore Services” button
  scrollToServices() {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ✅ For page navigation (used in other buttons)
  navigateToPage(path: string) {
    this.router.navigate([path]);
  }
}
