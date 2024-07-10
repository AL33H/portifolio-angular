import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from '@angular/material';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    FooterComponent,
    SkillCardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
