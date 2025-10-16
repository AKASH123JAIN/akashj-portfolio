// src/app/components/experience/experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'LTIMindtree',
      period: 'February 2022 - Present',
      description: [
        'Transformed outdated on-premises systems to a serverless architecture using AWS Lambda, Python, and Node.js; this infrastructure modernization effort led to 70% faster deployment cycles.',
        'Developed custom API Gateway integrations and Lambda functions to ensure efficient cloud operations, adhering to software engineering best practices.',
        'Implemented secure authentication processes using Azure AD, Auth0, and Google captcha for authentication on websites, effectively integrating cross-functional team input.',
        'Designed and maintained scalable AWS Infrastructure using Amazon Landing Zone, focusing on delegated permissions and cost-optimization strategies.',
        'Optimized CI/CD pipelines in GitLab with automated scripts to enhance infrastructure provisioning.'
      ]
    },
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      period: 'September 2019 - February 2022',
      description: [
        'Developed REST services to create dynamic Word and Excel documents, and converted XML to JPEG using Apache POI and IText Libraries.',
        'Constructed backend architecture with Spring Boot, leveraging AWS CloudFormation designs captured via AWS CDK for infrastructure scripting using CloudFormation and Terraform.',
        'Enhanced various tools with Spring Security, providing robust authentication and authorization mechanisms. Integrated advanced image processing with mxGraph, and automated AWS infrastructure setup through Terraform by configuring essential parameters in cloud design solutions.'
      ]
    },
    {
      title: 'Software Intern',
      company: 'Solveda Private Limited',
      period: 'May 2018 - July 2018',
      description: [
        'Worked on building a solution using IBM Watson for an application to interact with chatbot trained on the IBM Cloud Bluemix using Conversation API.',
        'Handled scripting tasks for debugging and automation.',
        'Implemented the fixes to fortify Scan issues and Dependency Check reports vulnerability resolution.'
      ]
    }
  ];
}