// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  hobbies = ['Listening Podcasts', 'Swimming', 'Calisthenics'];
  contactInfo = {
    location: 'Greensboro, North Carolina (USA)',
    phone: '+1 (332) 260-4556'
  };
}