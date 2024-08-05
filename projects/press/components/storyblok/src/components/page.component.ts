
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokDirective } from '../directives/storyblok.directive';

@Component({
  selector: 'press-storyblok-page',
  templateUrl: './page.component.html',
  standalone: true,
  imports: [CommonModule, StoryblokDirective, DynamicModule]
})
export class PageComponent {
  @Input() body: any[];
  @Input() editable: any;

  components: any;

  constructor() {
    import('./components').then(cp => {
      this.components = cp.StoryBlokComponents;
    });
  }
}
