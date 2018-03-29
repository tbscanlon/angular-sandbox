import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // public onSubmit(form: NgForm) {
  //   console.log('submitted', form.value);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
