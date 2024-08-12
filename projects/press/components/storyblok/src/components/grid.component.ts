import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { StoryblokService } from '../services/storyblok.service';
import { StoryblokDirective } from './../directives/storyblok.directive';
import { StoryBlokComponents } from './components';

@Component({
  selector: 'press-storyblok-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, StoryblokDirective, DynamicModule],
})
export class GridComponent {
  @Input() component: any;
  @Input() columns: any[];
  @Input() _uid: any;
  @Input() _editable: any;

  components = StoryBlokComponents;

  constructor(private storyblok: StoryblokService) {}
}
