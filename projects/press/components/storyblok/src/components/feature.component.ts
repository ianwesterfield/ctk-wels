import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StoryblokDirective } from '../directives/storyblok.directive';

@Component({
  selector: 'press-storyblok-feature',
  standalone: true,
  imports: [CommonModule, StoryblokDirective],
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  @Input() name: string;
  @Input() component: any;
  @Input() _uid: any;
  @Input() _editable: any;
}
