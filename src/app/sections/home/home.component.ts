import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeNav;

  constructor(private navigationService: NavigationService){};

  ngOnInit(){
    this.homeNav = this.navigationService.getConfig();
  }
}
