import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, EditorConfig, HtmlEmbed } from 'ckeditor5';
import { StoryblokDirective } from '../directives/storyblok.directive';

@Component({
  selector: 'press-storyblok-article',
  standalone: true,
  imports: [CommonModule, CKEditorModule, StoryblokDirective],
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  @Input() name: string;
  @Input() component: any;
  @Input() _uid: any;
  @Input() _editable: any;
  @Input() copyText: any;
  @Input() title: any;
  @Input() publishDate: any;

  public Editor = ClassicEditor;
  public editorConfig: EditorConfig = {
    toolbar: ['htmlEmbed'],
    plugins: [HtmlEmbed],
    htmlEmbed: {
      showPreviews: true,
    },
  };

  constructor(
    @Inject('APP_CONFIG') appConfig,
    private sani: DomSanitizer,
  ) {
    this.editorConfig.licenseKey = appConfig.licenseKey;
  }
}
