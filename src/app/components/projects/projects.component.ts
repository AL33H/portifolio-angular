import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  projects: Project[]

  ngOnInit() {
    this.projects = this.projectService.getAllProjects()
    console.log(this.projects)
  }

}
