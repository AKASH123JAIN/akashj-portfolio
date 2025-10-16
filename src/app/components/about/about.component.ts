// src/app/components/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  summary = `I'm a hands-on software engineer with 6 years under my belt, specializing in AWS, Java, Spring Boot, and Angular. I've led the charge on building scalable apps from the ground up—think robust backends that handle real-world traffic and intuitive frontends that users actually love. One of my favorite wins? Guiding teams through legacy system overhauls, turning clunky old monoliths into sleek, cloud-native setups that cut costs and boosted performance by 40% in some cases. I'm all about practical solutions that deliver value fast, and I'm excited to bring that energy to a team tackling big challenges. Let's chat about how I can help modernize yours.`;
}