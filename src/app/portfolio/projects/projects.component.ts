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
      image: 'https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0dXJufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      repository: 'https://github.com/LucasVieiraS/Machinery',
      last_commit: '???',
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
          this.repositories[this.repositories.indexOf(data)].last_commit = json.commit.commit.author.date
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
