import { WorkComponent } from './../../sections/work/work.component';
import { Component, Input, Output, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-section-mini-nav',
  templateUrl: './sectionMiniNav.component.html',
  styleUrls: ['./sectionMiniNav.component.scss']
})
export class SectionMiniNavComponent implements OnInit {
    @Input() currentSection;
    navConfig;

    constructor(private navigationService: NavigationService){};

    ngOnInit(){
      this.navConfig = this.navigationService.getConfig();
    }
}