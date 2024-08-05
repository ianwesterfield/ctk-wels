import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from '../services/storyblok.service';
import { StoryblokDirective } from './../directives/storyblok.directive';

@Component({
  selector: 'press-storyblok-grid',
  templateUrl: './grid.component.html',
  standalone: true,
  imports: [CommonModule, StoryblokDirective, DynamicModule]
})

export class GridComponent {
  @Input() columns: any[];
  @Input() editable: any;

  components: any;

  constructor(private storyblok: StoryblokService) {
    import('./components').then(cp => {
      this.components = cp.StoryBlokComponents;
    });
  }
}
