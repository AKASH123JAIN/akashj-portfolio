// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Cloud Exponence',
      description: [
        'Enables the Operations Team to raise requests against a catalog item (AWS Service). Once raised with proper config parameters, it leads to the creation of an AWS resource on the given AWS account.',
        'Maintains a complete workflow with different roles to approve/reject requests raised by operations teams.',
        'Configured authentication using standard SAML 2.0 on a Spring Boot application, integrating Okta as the Identity Provider with Spring Native Security API.',
        'Provided upload functionality for multiple catalog items by a platform admin role, including blueprint JSONs representing AWS Native Services.',
        'Categorized catalog items into Infrastructure, Platform, and Storage.',
        'Provides analysis on migration and modernization flexibility for on-premise applications and databases.',
        'Created Database and App Analysis screens to provide recommendations based on AWS SCT and SonarQube reports, displaying DB and App Freedom Indices.',
        'Implemented dynamic report generation, converting JSON data to XML and then to PNG for inclusion in Word documents using XWPFPictureUtility.'
      ]
    }
  ];
}