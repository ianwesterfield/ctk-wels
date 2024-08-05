import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StoryBlokComponents, StoryblokService } from '@ctk/press/components/storyblok';
import { WINDOW, WINDOW_PROVIDERS } from '@ctk/press/services/window';
import { DynamicModule } from 'ng-dynamic-component';
import { of } from 'rxjs/internal/observable/of';

declare global {
  interface Window {
      storyblok: any;
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, DynamicModule, RouterModule, MatIconModule, MatButtonModule],
  providers: [WINDOW_PROVIDERS],
  selector: 'ctk-dc-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  story = {content: null, name: ''};
  components = StoryBlokComponents;

  constructor(@Inject(WINDOW) private window: Window, private storyblokService: StoryblokService) {
    this.window.storyblok.init();
    this.window.storyblok.on(['change', 'published'],  function() {
      console.log('(1)');
      location.reload();
    });
  }

  ngOnInit() {
    of(this.storyblokService.getStories({})).subscribe(values => {
      console.log(values);
    })


    this.storyblokService.getStory('home', { SVGMarkerElement, version: 'draft'})
      .then(data => this.story = data.story);
  }
}
