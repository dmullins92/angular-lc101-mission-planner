import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: object = null;
  equipmentList: object[] = [
    {equipmentName: "Habitat dome"}, 
    {equipmentName: "Drones"}, 
    {equipmentName: "Food containers"}, 
    {equipmentName: "Oxygen tanks"}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    this.equipmentList.push({equipmentName: equipmentName});
  }

  remove(equipment: object) {
    let index = this.equipmentList.indexOf(equipment);
    this.equipmentList.splice(index, 1);
  }

  edit(equipment: object) {
    this.equipmentBeingEdited = equipment;
 }

 save(equipmentName: string, equipment: object) {
  equipment['equipmentName'] = equipmentName;
  this.equipmentBeingEdited = null;
  }

}
