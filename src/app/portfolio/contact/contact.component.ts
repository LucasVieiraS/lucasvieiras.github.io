import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailForm = new FormGroup({
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient, private eventEmitterService: EventEmitterService) { }

  onSubmit() {
    if (this.emailForm.valid) {
      const email = this.emailForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xnqrzqvg',
        { 'email address': email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            if (response == "ok") {
              this.eventEmitterService.emitToast("Success!", "E-mail succesfully sent.")
            }
          }
        );
    }
  }

  ngOnInit(): void {
  }

}
