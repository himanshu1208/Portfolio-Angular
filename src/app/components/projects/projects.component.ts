import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowPreviewComponent } from './show-preview/show-preview.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  projectData : any;
  academicData: any;
  templateData: any;

  ngOnInit(): void {
    this.getProjetcData()
    this.getAcademicsProjectData()
    this.getTemplateData()
  }

  getAcademicsProjectData() {
    const url = "assets/apis/academicProjects.json";
    this.http.get(url).subscribe(res => {
      this.academicData = res;
      console.log(this.projectData)
    })
  }

  getProjetcData() {
    const url = "assets/apis/projectData.json";
    this.http.get(url).subscribe(res => {
      this.projectData = res;
      console.log(this.projectData)
    })
  }

  getTemplateData() {
    const url = "assets/apis/templateData.json";
    this.http.get(url).subscribe(res => {
      this.templateData = res;
      console.log(this.projectData)
    })
  }

  showTemplate(imgUrl) {
    const dialogRef = this.dialog.open(ShowPreviewComponent, {
      width: '850px',
      height:'500px',
      data: {imageUrl: imgUrl},
    });
  }

}
