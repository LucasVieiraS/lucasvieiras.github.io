import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  toastData = [
    {
      title: 'Notification',
      message: 'Ok',
      visible: false,
    },
  ];

  constructor() { }

  sendMessage(title: string, message: string) {
    this.toastData.push({
      title: title,
      message: message,
      visible: true,
    })
    setTimeout(() => {
      this.toastData.pop();
    }, 1000);
  }

  ngOnInit(): void {
  }

}
