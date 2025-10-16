// src/app/components/skills/skills.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    'Java with Spring Boot Framework',
    'Serverless Framework with AWS',
    'Node.js and Nest.js',
    'Typescript',
    'Cloud Formation Template',
    'Microservices/RESTful Web APIs',
    'Python with Fast API',
    'Microservices Architecture',
    'Angular.JS'
  ];
}