import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  projectImage: string = "";
  @Input()
  projectTitle: string = "";
  @Input()
  projectDescription: string = "";
  @Input()
  projectRepository: string = "https://github.com/LucasVieiraS"
  @Input()
  projectDemo: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
