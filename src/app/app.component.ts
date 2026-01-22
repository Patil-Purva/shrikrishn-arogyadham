import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Add this

@Component({
  selector: 'app-root',
  standalone: true, // ✅ You are using standalone
  imports: [RouterModule], // ✅ Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
