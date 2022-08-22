import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  repositories = [
    {
      name: 'Machinery',
      description: 'Discord bot that assists in automation.',
      logo: 'fa-brands fa-discord',
      image: 'https://github.com/LucasVieiraS/Machinery/blob/main/src/img/logo.png?raw=true',
      repository: 'https://github.com/LucasVieiraS/Machinery',
      version: 'v2.0',
      main_branch: 'main',
    },
  ]

  constructor() { }

  getLastestCommit(data : any) {
    let repositoryUrl : string = data.repository;
    let main_branch : string = data.main_branch;
    fetch(
      `${repositoryUrl}/branches/${main_branch}`
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.repositories[this.repositories.indexOf(data)].version = json.commit.commit.author.date
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    /*this.repositories.forEach((data) => {
      this.getLastestCommit(data);
    })*/
  }

}
