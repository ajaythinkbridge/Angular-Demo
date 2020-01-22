import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  @Input() contactDetailsToDisplay: any;
  @Input() myValueVar = '';
  @Input() localStorageItemsArray:any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createFormGroup();
    this.getItemsFromLocalStorage();
    this.contactDetailsToDisplay = new PersonalData();
  }

  createFormGroup() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }


  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm.controls);
    if (this.contactForm.invalid) {
      console.log('validation failed');
      return;
    }

    this.contactDetailsToDisplay = Object.assign({}, this.contactForm.value);
    console.log('reactiveForm', this.contactForm.value);

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    this.reset();
  }

  reset() {
    this.submitted = false;
    this.contactForm.reset();
  }

  getItemsFromLocalStorage()
  {
    this.localStorageItemsArray = localStorage.getItem('toDoListActions') ? JSON.parse(localStorage.getItem('toDoListActions')) : [];
  }
}

export class PersonalData {
  name: string = ''
  email: string = ''
  query: string = ''
}
