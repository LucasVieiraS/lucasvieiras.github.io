import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  componentsScrollable = [
    'discover',
    'projects',
    'about-me',
    'contact'
  ];

  totalActive = 0;

  constructor() { }

  getComponents() {
    let components: string[] = [];
    Array.from(this.componentsScrollable).forEach((element: string | any) => {
      if (!element) return;
      const elements: any = document.getElementById(element);
      if (!elements) return;
      components.push(elements);
    });
    return components
  }

  getIdFromHref(nav: HTMLElement | any) {
    return nav.getAttribute('href').replace('#', '');
  }

  setNavLinkState(nav: HTMLElement | any, componentId: string, fakeActive: boolean) {
    const navId = this.getIdFromHref(nav);

    if (fakeActive) {
      nav.classList.add("active")
    } else {
      if (navId == "discover") {
        nav.classList.remove("active")
      }
    }

    if (navId == componentId) {
      if (!nav.classList.contains("active")) {
        this.totalActive += 1;
      }
      nav.classList.add("active")
    } else {
      if (nav.classList.contains("active")) {
        this.totalActive -= 1;
      }
      nav.classList.remove("active")
    }

  }

  ngOnInit(): void {
    const navItems = Array.from(document.getElementsByClassName('nav-scroll'))
    const components = this.getComponents();

    window.onscroll = () =>{
      components.forEach((comp: HTMLElement | any) => {
        const componentId = comp.id;

        let top = window.scrollY;
        let offset = comp.offsetTop;
        let height = comp.offsetHeight;

        if (componentId == "projects") {
          height /= 1.5;
          offset /= 1.5;
        } else if (componentId == "about-me" || componentId == "contact") {
          top *= 1.2;
          if (window.screen.width < 400) {
            if (top > 4500) {
              navItems.forEach((nav : HTMLElement | any) => {
                if (this.getIdFromHref(nav) == "contact") {
                  this.setNavLinkState(nav, componentId, true)
                }
              })
            }
          } else {
            if (top > 4200 / (2200/window.screen.height)) {
              navItems.forEach((nav : HTMLElement | any) => {
                const navId = this.getIdFromHref(nav);
                if (navId == "contact") {
                  this.setNavLinkState(nav, componentId, true)
                } else if (navId == "about-me") {
                  this.setNavLinkState(nav, componentId, false)
                }
              })
            }
          }
        }

        if (top >= offset && top < offset + height){
          navItems.forEach((nav : HTMLElement | any) => {
            this.setNavLinkState(nav, componentId, false)
          })
        }

        if (this.totalActive == 0) {
          navItems.forEach((nav : HTMLElement | any) => {
            if (this.getIdFromHref(nav) == "discover") {
              this.setNavLinkState(nav, componentId, true)
            }
          })
        }

      })
    };
  }

}
