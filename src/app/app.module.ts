import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './portfolio/about-me/about-me.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ExtraComponent } from './portfolio/extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
