import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { sendEmailVerification } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  message: string = '';
  private auth: Auth | null = null;

  private fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.signupForm = this.fb.group({
      email: [''],
      password: ['']
    });

    // ✅ Only inject auth in the browser context
    if (isPlatformBrowser(this.platformId)) {
      this.auth = inject(Auth);
    }
  }
  signup() {
    const { email, password } = this.signupForm.value;
  
    if (!this.auth) {
      this.message = 'Authentication not initialized.';
      return;
    }
  
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return sendEmailVerification(user); // Sends email verification
      })
      .then(() => {
        this.message = 'Signup successful! Verification email sent.';
      })
      .catch((err) => {
        this.message = err.message;
      });
  }
} 