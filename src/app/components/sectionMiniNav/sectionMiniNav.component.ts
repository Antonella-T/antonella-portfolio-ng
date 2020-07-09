import { WorkComponent } from './../../sections/work/work.component';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-mini-nav',
  templateUrl: './sectionMiniNav.component.html',
  styleUrls: ['./sectionMiniNav.component.scss']
})
export class SectionMiniNavComponent {
    @Input() currentSection;
}