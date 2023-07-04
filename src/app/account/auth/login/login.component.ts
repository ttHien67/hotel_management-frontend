import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any;
  isSubmit: Boolean = false

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    document.body.style.backgroundImage = 'url(\'assets/img/nature.jpg\')';
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.isSubmit = true;
    console.log(this.form.value);
    
  }

}
