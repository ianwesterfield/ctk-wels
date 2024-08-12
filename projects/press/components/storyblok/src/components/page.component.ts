import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokDirective } from '../directives/storyblok.directive';
import { StoryBlokComponents } from './components';

@Component({
  selector: 'press-storyblok-page',
  templateUrl: './page.component.html',
  standalone: true,
  imports: [CommonModule, StoryblokDirective, DynamicModule],
})
export class PageComponent {
  @Input() body: any[];
  @Input() _uid: string;
  @Input() _editable: string;
  @Input() component: any;

  components = StoryBlokComponents;

  constructor() {}
}
