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
      const emailData = this.emailForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const email = emailData.email || "";
      const message = emailData.message || "";
      if (email.length < 5 || message.length < 5) {
        this.eventEmitterService.emitToast("Failed!", "Input is not long enough.")
        return;
      }
      this.http.post('https://formspree.io/f/xnqrzqvg',
        { 'email address': email, message: message },
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
