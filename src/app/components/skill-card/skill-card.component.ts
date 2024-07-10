import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() skills: Skill[];

  constructor() { }

  ngOnInit() {
    console.log(this.skills)
  }

}


