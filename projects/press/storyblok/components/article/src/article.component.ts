import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'press-storyblok-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  @Input() article: any;
}
