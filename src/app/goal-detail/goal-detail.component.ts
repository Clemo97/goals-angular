//Input is imported to allow input property binding
import { Component, Input, OnInit } from '@angular/core';
//Import goal propert class
import { Goal } from '../goal';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input()
  // The "!" after a variable tells TYpescript that the value is not null or undefined.
  goal!: Goal;

  constructor() { }

  ngOnInit(): void {
  }

}

