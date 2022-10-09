import { Repository } from '../models/repository';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getPinnedRepositories() {
    const url = "https://gh-pinned-repos.egoist.sh/?username=LucasVieiraS"
    return this.http.get<Repository>(url).pipe(
      map(return_ => return_),
      catchError(async (error) => console.log(error))
    );
  }
}
