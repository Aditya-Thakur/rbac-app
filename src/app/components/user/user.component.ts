// src/app/components/users/users.component.ts
import { Component } from '@angular/core';
import { Permissions } from 'src/app/models/permissions';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: User[] = [];
  currentUser: User | null = null;

  constructor(private userService: UserService) {
    this.userService.users$.subscribe(users => this.users = users);
    this.userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  canEditUser(): boolean {
    return this.currentUser?.permissions.includes(Permissions.CanUpdateUser) || false;
  }
}
