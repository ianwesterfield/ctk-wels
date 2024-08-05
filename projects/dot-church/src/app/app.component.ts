import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StoryblokService } from '@ctk/press/components/storyblok';
import { WINDOW_PROVIDERS } from '@ctk/press/services/window';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  providers: [WINDOW_PROVIDERS, StoryblokService],
  selector: 'ctk-dc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
}
