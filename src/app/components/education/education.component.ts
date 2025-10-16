// src/app/components/education/education.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
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
    'AWS Solution Architect Certified',
    'AWS AI Engineer Certified'
  ];
}