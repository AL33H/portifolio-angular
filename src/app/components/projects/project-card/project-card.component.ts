import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() projects: Project[]

  constructor() { }

  ngOnInit() {
  }

}
