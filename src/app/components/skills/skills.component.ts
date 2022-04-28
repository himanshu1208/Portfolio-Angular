import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  skills: any

  ngOnInit(): void {
    this.getSkillsData()
  }

  getSkillsData() {
    const url = "assets/apis/skills.json";
    this.http.get(url).subscribe(res => {
      this.skills = res;
    })
  }

}
