import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  homeNav = [
    {
      link: "/about",
      heading: "Who I am?",
      flipDirection: "right",
      colorValue: "100",
      initial: "A"
    },
    {
      link: "/work",
      heading: "What I do?",
      flipDirection: "down",
      colorValue: "75",
      initial: "W"
    },
    {
      link: "/blog",
      heading: "My Blog",
      flipDirection: "up",
      colorValue: "50",
      initial: "B"
    },
    {
      link: "/contact",
      heading: "Get in touch",
      flipDirection: "left",
      colorValue: "25",
      initial: "C"
    }
  ]

  constructor() {}

  getConfig() {
    return this.homeNav;
  }  

}