// src/app/components/education/education.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education = {
    degree: 'B-Tech. Computer Engineering (Honors)',
    college: 'Poornima College Of Engineering',
    period: '2015 - 2019'
  };

  achievements = [
    {
      name: 'AWS AI Practitioner Certified',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/5fcfdc6c-123d-45b9-90c3-744bfde8a6da',
      logoUrl: 'assets/aws-ai.jpg'
    },
    {
      name: 'AWS Solution Architect Certified',
      issuer: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/dd485d03-6d51-4d4b-8609-548c7656862e',
      logoUrl: 'assets/aws-sa.jpg'
    },
    {
      name: 'Github Copilot Certified',
      issuer: 'GitHub',
      link: 'https://www.credly.com/badges/195ad764-afa5-4bb3-b294-b1cc707c602f',
      logoUrl: 'assets/github-copilot.jpg'
    }
  ];

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}