import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { AboutMeComponent } from './portfolio/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { ToastsComponent } from './portfolio/toasts/toasts.component';
import { EventEmitterService } from './services/event-emitter.service';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ProjectCardComponent,
    TitleComponent,
    ToastComponent,
    ToastsComponent,
    ThemeSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
