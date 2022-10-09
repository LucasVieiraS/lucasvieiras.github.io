import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailForm = new FormGroup({
    vale: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  onSubmit() {
    if (this.emailForm.valid) {
      console.log(this.emailForm)

    }
  }

  ngOnInit(): void {
  }

}
