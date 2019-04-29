import { Component, OnInit } from '@angular/core';
import { Housework } from '../models/housework';
import { FamilyMembers } from '../models/family-members';
import { HouseworkService } from '../services/housework.service';
import { FamilyMembersService } from '../services/family-members.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  houseworkModel: Housework;
  familyModel: FamilyMembers[]

  constructor(private houseworkService: HouseworkService, private familyMembersService:FamilyMembersService) {
    this.houseworkModel=<Housework>{};
    // this.familyModel=<FamilyMembers>{};
   }

  ngOnInit() {
    this.familyMembersService.get().subscribe(familyData => {
      this.familyModel = <FamilyMembers[]><any>familyData;
    });
  }
  addTodo() {

    this.houseworkService.post(this.houseworkModel).subscribe(res => {
      console.log(res);
    });
  }

}
