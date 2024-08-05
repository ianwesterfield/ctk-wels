import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StoryblokDirective } from './../directives/storyblok.directive';

@Component({
  selector: 'press-storyblok-teaser',
  standalone: true,
  imports: [CommonModule, StoryblokDirective],
  templateUrl: './teaser.component.html'
})
export class TeaserComponent {
  @Input() headline: string;
  @Input() editable: any;
}
