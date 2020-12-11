import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: object = null;
  experimentList: object[] = [
    {experimentName: 'Mars soil sample'},
    {experimentName: 'Plant growth in habitat'},
    {experimentName: 'Human bone density'}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    this.experimentList.push({experimentName: experimentName})
  }

  remove(experiment: object) {
    let index = this.experimentList.indexOf(experiment);
    this.experimentList.splice(index, 1);
  }

  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
  }

  save(experimentName: string, experiment: object) {
    experiment['experimentName'] = experimentName;
    this.experimentBeingEdited = null;
  }

}
