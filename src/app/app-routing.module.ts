import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path:"skills",
    component:SkillsComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  {
    path:"education",
    component:EducationComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"work",
    component:WorkComponent
  },
  { path: '',   
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ProjectsComponent,EducationComponent,ContactComponent,SkillsComponent,WorkComponent]
