import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngSubmit(form: any): void {
    console.log(form.value);
  }

  edit(): void {

  }

  delete(): void {
    
  }

}
