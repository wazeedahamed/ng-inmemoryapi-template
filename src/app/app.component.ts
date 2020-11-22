import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from './__interface/IUser';
import { UsersService } from './__services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-inmemoryapi-template';
  edit_id = 0;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required)
  });
  userList: IUser[] = [];
  constructor(private users: UsersService) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers() {
    this.users.getUsers().subscribe(
      users => {
        this.userList = users;
      },
      error => console.log('error')
    )
  }

  SaveUser() {
    const v = this.form.getRawValue();
    const _user: IUser = {
      id: this.edit_id || undefined,
      name: v.name,
      gender: v.gender
    }
    this.form.reset();
    this.edit_id = 0;
    this.users.saveUser(_user).subscribe(
      user => {
        if (!_user.id) {
          this.userList.push(user);
        } else {
          const _index = this.userList.findIndex(u => u.id == user.id);
          this.userList[_index] = user;
        }
      },
      error => console.log('error')
    );
  }

  EditUser(id: number) {
    this.users.getUserById(id).subscribe(
      user => {
        this.edit_id = user.id || 0;
        this.form.patchValue({
          name: user.name,
          gender: user.gender
        })
      },
      error => console.log('error')
    );
  }

  DeleteUser(id: number) {
    this.users.deleteUser(id).subscribe(
      success => {
        if (success) {
          const _index = this.userList.findIndex(u => u.id == id);
          this.userList.splice(_index, 1);
        }
      },
      error => console.log('error')
    );
  }

}
