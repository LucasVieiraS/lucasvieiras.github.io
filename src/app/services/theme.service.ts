import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  default = 'light';

  public get current(): string {
    return localStorage.getItem('theme') ?? this.default;
  }

  public set current(value: string) {
    localStorage.setItem('theme', value);
  }

  constructor() {
    if (localStorage.getItem('theme') !== undefined) {
      this.current;
    }
  }
}
