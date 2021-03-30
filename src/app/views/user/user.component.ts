import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userinterface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:Users[]=[]
  constructor(private userService:UserService) { }

  getData(){
    this.users=this.userService.getUser()
  }

  ngOnInit(): void {
    this.getData()
  }

}
