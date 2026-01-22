import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  previewVideoUrl: SafeResourceUrl;
  videos: { title: string; url: SafeResourceUrl }[];
  purchased?: boolean;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.courses = [
      {
        id: '1',
        title: 'Padartha Vigyan evam Ayurveda Itihas',
        description: 'Fundamentals and history of Ayurveda.',
        price: 799,
        previewVideoUrl: this.safeUrl('https://www.youtube.com/embed/DFKxy0svG8g'),
        videos: [
          { title: 'Introduction to Ayurveda', url: this.safeUrl('https://www.youtube.com/embed/L1k2KzvUZZM') },
          { title: 'Philosophy of Ayurveda', url: this.safeUrl('https://www.youtube.com/embed/aEo2nZ1yb7o') }
        ],
        purchased: false
      },
      {
        id: '2',
        title: 'Kriya Sharir',
        description: 'Ayurvedic physiology and body functions.',
        price: 899,
        previewVideoUrl: this.safeUrl('https://www.youtube.com/embed/ZBWy3pQh3Ew'),
        videos: [
          { title: 'Doshas and their Role', url: this.safeUrl('https://www.youtube.com/embed/0HYiZZpsJmI') },
          { title: 'Dhatus and Malas', url: this.safeUrl('https://www.youtube.com/embed/BT8OtDJ3yuk') }
        ],
        purchased: false
      },
      {
        id: '3',
        title: 'Dravyaguna Vigyan',
        description: 'Study of Ayurvedic herbs and their properties.',
        price: 999,
        previewVideoUrl: this.safeUrl('https://www.youtube.com/embed/Jr0R_3vF3Kc'),
        videos: [
          { title: 'Introduction to Medicinal Plants', url: this.safeUrl('https://www.youtube.com/embed/bb7Rya-1Rkk') },
          { title: 'Herbal Formulations', url: this.safeUrl('https://www.youtube.com/embed/cY3LCQ4HkPg') }
        ],
        purchased: false
      }
      // You can add more subjects here similarly
    ];
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  buyCourse(courseId: string): void {
    const course = this.courses.find(c => c.id === courseId);
    if (course) {
      course.purchased = true;
      alert(`✅ You purchased ${course.title}`);
    }
  }
}
