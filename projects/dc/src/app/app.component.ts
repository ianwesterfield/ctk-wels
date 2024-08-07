import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { StoryblokService } from '@ctk/press/components/storyblok';
import { WINDOW_PROVIDERS } from '@ctk/press/services/window';
import { config } from '../environments/environment';
import { PressShellComponent } from './../../../press/components/shell/src/shell.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PressShellComponent,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [
    WINDOW_PROVIDERS,
    StoryblokService,
    { provide: 'APP_CONFIG', useValue: config },
  ],
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
