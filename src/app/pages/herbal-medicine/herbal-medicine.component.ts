import { Component } from '@angular/core';

@Component({
  selector: 'app-herbal-medicine',
  imports: [],
  templateUrl: './herbal-medicine.component.html',
  styleUrl: './herbal-medicine.component.css'
})
export class HerbalMedicineComponent {
  openLink(url: string) {
    window.open(url, '_blank');
  }

}
