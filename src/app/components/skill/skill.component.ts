import { Component, OnInit } from '@angular/core';
import { Skill, SkillService } from 'src/app/service/skill.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  allSkills: Skill[]

  ngOnInit() {
    this.allSkills = this.skillService.getAllSkills()
  }

}
