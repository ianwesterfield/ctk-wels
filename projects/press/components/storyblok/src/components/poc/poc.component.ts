import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StoryblokService } from '@ctk/press/components/storyblok';
import { WINDOW } from '@ctk/press/services/window';
import { DynamicModule } from 'ng-dynamic-component';
import { of } from 'rxjs/internal/observable/of';
import { StoryBlokComponents } from '../components';

declare global {
  interface Window {
      storyblok: any;
  }
}

@Component({
  selector: 'press-storyblok-poc',
  standalone: true,
  imports: [CommonModule, DynamicModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './poc.component.html',
})
export class StoryblokPocComponent implements OnInit {
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
    of(this.storyblokService.getStories({ version: 'draft' })).subscribe(values => {
      console.log(values);
    })


    // this.storyblokService.getStory('home', { version: 'draft'}).subscribe(data => this.story = data.story);
  }
}
