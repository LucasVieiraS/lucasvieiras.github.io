import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repositoryData: any;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryService.getPinnedRepositories().subscribe(data => {
      this.repositoryData = data;
    });
  }

}
