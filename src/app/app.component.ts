import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  darkMode = false;

  switchDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.style.backgroundColor = this.darkMode == true && 'rgb(200, 200, 200)' || 'rgb(255, 255, 255)';
  }
}
