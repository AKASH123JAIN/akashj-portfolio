import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
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
    },
    {
      title: 'Smart Site Assistant',
      description: [
        'Built an AI-powered Chrome extension that delivers contextual, in-page navigation guidance using AWS Bedrock—helping users complete tasks faster by surfacing targeted tooltips and action suggestions on enterprise sites.',
        'Designed extension using Manifest V3 service worker and content scripts to separate AI orchestration from page interaction.',
        'Integrated AWS Bedrock runtime (@aws-sdk/client-bedrock-runtime) to generate contextual suggestions and natural-language guidance.',
        'Implemented floating tooltips/popovers using popper.min.js for accurate element positioning and unobtrusive UX.',
        'Automated bundling with esbuild via build.js, producing a compact dist package for Chrome loadable installs.',
        'Scoped host_permissions to target domains and used Chrome storage.sync for configurable AWS credentials; balanced functionality with least-privilege access.',
        'Added watch/build scripts and clear install instructions to streamline development and onboarding.'
      ]
    }
  ];
}