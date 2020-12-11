import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crewMemberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(crewMemberName: string, isFirst: boolean) {
    this.crew.push({name: crewMemberName, firstMission: isFirst});
  }

  remove(crewMember: object) {
    let index = this.crew.indexOf(crewMember);
    this.crew.splice(index, 1);
  }

  edit(crewMember: object) {
    this.crewMemberBeingEdited = crewMember;
 }

 save(name: string, crewMember: object) {
  crewMember['name'] = name;
  this.crewMemberBeingEdited = null;
  }

}
