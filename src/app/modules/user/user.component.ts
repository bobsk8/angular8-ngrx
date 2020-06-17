import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import * as UserActions from '../../actions/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data$: Observable<User[]> = this.store.select(state => state.users);
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<{ users: User[] }>
  ) { }

  ngOnInit() {
    this.userForm = this.createForm();
    this.getUsers();
  }

  getUsers(): void {
    this.store.dispatch(UserActions.GetAll());
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngSubmit(form: any): void {
    if (!form.valid) {
      return;
    }
    const user = Object.assign(new User(), form.value);
    this.save(user);
  }

  save(user: User): void {
    this.store.dispatch(UserActions.Save(user));
  }

  edit(): void {

  }

  delete(): void {
    this.store.dispatch(UserActions.GetAll());
  }

}
