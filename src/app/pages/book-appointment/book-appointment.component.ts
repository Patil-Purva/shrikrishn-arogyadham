import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {   // ✅ make sure this name matches exactly
  appointment = {
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';
  isSubmitting = false;

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  async submitAppointment() {
    this.successMessage = '';
    this.errorMessage = '';
    this.isSubmitting = true;

    try {
      const isBooked = await this.appointmentService.isSlotBooked(
        this.appointment.date,
        this.appointment.time
      );

      if (isBooked) {
        this.errorMessage = '❌ This time slot is already booked. Please select another.';
        this.isSubmitting = false;
        return;
      }

      await this.appointmentService.bookAppointment(this.appointment);
      this.successMessage = '✅ Appointment booked successfully!';
      this.appointment = { name: '', phone: '', date: '', time: '', message: '' };
    } catch (err: any) {
      console.error('Firestore error full object:', err);
      this.errorMessage = `Something went wrong. (${err?.code || 'unknown_error'}) ${err?.message || ''}`;
    } finally {
      this.isSubmitting = false;
    }
  }
}
