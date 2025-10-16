// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // For project cards

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
      description: `The Product is about giving the Operations Team to raise the request against a catalog item, which is an AWS Service which, once raised with proper config parameters, leads to the creation of an AWS resource on the given AWS account details. Complete workflow is also maintained with different sets of roles to approve/reject the request raised by operations teams. Owned the responsibility for configuring authentication using the standard SAML 2.0 (Security Assertion Markup Language) on an application built with the Spring Boot framework. Provided Authentication using SAML with OKTA as Identity Provider and integrated it with Spring Native Spring Security API. Provided the upload functionality for multiple catalog Items by a platform admin role and also upload the blueprint JSON against the catalog which are AWS Native Services representatives also categorize the catalog items against the categories like Infrastructure, Platform and Storage. This product data points to give analysis on the flexibility of migration and modernization of the on-premise applications and databases. Created the Database and App Analysis Screen to provide the recommendation to the Assessors based on the AWS SCT Reports and SonarQube Reports that are uploaded on the tool and show the DB Freedom Index and App Freedom Indexs to give a fair idea of how flexible the migration is going to be. Dynamically getting the architecture designs printed on the Word Documents, where I worked on converting the JSON data to xml and then further converting the XML data to PNG and writing it to word document using XWPFPictureUtility.`
    }
  ];
}