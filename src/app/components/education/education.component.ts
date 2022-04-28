import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private http: HttpClient) { }
  educationData: any

  ngOnInit(): void {
    this.getEdData()
    
  }

  getEdData() {
    const url = "assets/apis/education.json";
    this.http.get(url).subscribe(res => {
      this.educationData = res;
     })
  }

}
