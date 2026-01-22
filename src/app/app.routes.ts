import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard'; // Correct import

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./pages/books/books.component').then(m => m.BooksComponent),
  },
  {
    path: 'youtube',
    loadComponent: () =>
      import('./pages/youtube/youtube.component').then(m => m.YoutubeComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup.component').then(m => m.SignupComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'courses',
    canActivate: [authGuard], // Guard applied here
    loadComponent: () =>
      import('./pages/courses/courses.component').then(m => m.CoursesComponent),
  },
  // Service routes
  {
    path: 'panchakarma',
    loadComponent: () =>
      import('./pages/panchakarma/panchakarma.component').then(m => m.PanchakarmaComponent),
  },
  {
    path: 'herbal-medicine',
    loadComponent: () =>
      import('./pages/herbal-medicine/herbal-medicine.component').then(m => m.HerbalMedicineComponent),
  },
  {
    path: 'diet-consultation',
    loadComponent: () =>
      import('./pages/diet-consultation/diet-consultation.component').then(m => m.DietConsultationComponent),
  },
   {
    path: 'yoga',
    loadComponent: () =>
      import('./pages/yoga/yoga.component').then(m => m.YogaComponent),
  },
   {
    path: 'book-appointment',
    loadComponent: () =>
      import('./pages/book-appointment/book-appointment.component').then(
        m => m.BookAppointmentComponent
      ),
  },
];
