import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  allUsers:Users[]=[
    {id:1, name :'ahmed'},
    {id:2, name :'Mohamed'},
    {id:3, name :'ali'}
    
]
getUser(){
  return this.allUsers
}
}
