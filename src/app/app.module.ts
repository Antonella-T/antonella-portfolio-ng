import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { BlogComponent } from './sections/blog/blog.component';
import { WorkComponent } from './sections/work/work.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SectionHeaderComponent } from './components/sectionHeader/sectionHeader.component';
import { SectionMiniNavComponent } from './components/sectionMiniNav/sectionMiniNav.component';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    // Sections component
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    WorkComponent,
    ContactComponent,

    // Utils components
    SectionHeaderComponent,
    SectionMiniNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
