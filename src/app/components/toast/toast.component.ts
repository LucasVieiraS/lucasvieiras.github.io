import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input()
  title: string = "Notification";
  @Input()
  message: string = "Message hasn't loaded.";

  constructor(private eventEmitterService: EventEmitterService ) { }

  ngOnInit(): void {
  }

}
