import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataServiceService } from '../service/data-service.service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  users: User[];
  constructor(private dataService : DataServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.dataService.getUsers();
}

}
