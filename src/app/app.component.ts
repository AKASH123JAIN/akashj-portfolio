// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; // For nav
import { MatButtonModule } from '@angular/material/button'; // For toggle
import { MatIconModule } from '@angular/material/icon'; // For icons
import { MatChipsModule } from '@angular/material/chips';
import { trigger, transition, style, animate } from '@angular/animations'; // For fade-ins

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'akash-portfolio';
  darkMode = false; // For theme toggle

  toggleTheme() {
    this.darkMode = !this.darkMode;
  }

  handleImageError(event: ErrorEvent) {
    const img = event.target as HTMLImageElement;
    // Set a default image as fallback
    img.src = 'assets/profile.JPG';
    // If even that fails, hide the image
    img.onerror = () => {
      img.style.display = 'none';
    };
  }
}