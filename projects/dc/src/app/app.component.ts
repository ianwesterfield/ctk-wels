import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { config } from '@ctk/dc/src/environments/environment';
import { PressShellComponent } from '@ctk/press/components/shell';
import { StoryblokService } from '@ctk/press/components/storyblok';
import { WINDOW_PROVIDERS } from '@ctk/press/services/window';

@Component({
  standalone: true,
  imports: [CommonModule, PressShellComponent, RouterModule],
  providers: [
    WINDOW_PROVIDERS,
    StoryblokService,
    { provide: 'APP_CONFIG', useValue: config },
  ],
  selector: 'dc-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
