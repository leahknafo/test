import { Component, OnInit } from '@angular/core';
import { HouseworkService } from '../services/housework.service';
import { Housework } from '../models/housework';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  all_tasks: Housework[];

  constructor(private houseworkService: HouseworkService) { }

  ngOnInit() {
    this.houseworkService.get().subscribe(tasksData => {
      this.all_tasks = <Housework[]><any>tasksData;
    });

  }

}
