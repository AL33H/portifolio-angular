import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}


interface Skill {
  name: string;
  img: string;
}