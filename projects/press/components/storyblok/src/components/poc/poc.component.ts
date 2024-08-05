import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StoryblokService } from '@ctk/press/components/storyblok';
import { WINDOW } from '@ctk/press/services/window';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryBlokComponents } from '../components';

declare global {
  interface Window {
      storyblok: any;
  }
}

@Component({
  selector: 'press-storyblok-poc',
  standalone: true,
  imports: [CommonModule, DynamicModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoryblokPocComponent implements OnInit {
  story = {content: null, name: ''};
  components = StoryBlokComponents;

  constructor(@Inject(WINDOW) private window: Window, private storyblokService: StoryblokService) {
    this.window.storyblok.init();
    this.window.storyblok.on(['change', 'published'],  function() {
      console.log('storyblok event (change or published) received');
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: 'draft' }).subscribe(values => {
      this.story = values.data.stories[0];
    })
  }
}
