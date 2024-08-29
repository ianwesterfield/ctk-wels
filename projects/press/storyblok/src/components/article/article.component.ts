import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EditorComponent, EditorModule } from '@tinymce/tinymce-angular';
import { TinyMCE } from 'tinymce';
import { StoryblokDirective } from '../../directives/storyblok.directive';

type EditorOptions = Parameters<TinyMCE['init']>[0];

@Component({
  selector: 'press-storyblok-article',
  standalone: true,
  imports: [CommonModule, EditorModule, StoryblokDirective],
  templateUrl: './article.component.html',
})
export class ArticleComponent implements AfterViewInit, OnChanges {
  @ViewChild(EditorComponent) editor: EditorComponent;

  @Input() name: string;
  @Input() component: any;
  @Input() _uid: any;
  @Input() _editable: any;
  @Input() copyText: any;
  @Input() title: any;
  @Input() publishDate: any;

  options: EditorOptions = {
    plugins:
      'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
    toolbar:
      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
  } as EditorModule;

  constructor(
    @Inject('APP_CONFIG') appConfig,
    private sani: DomSanitizer,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    console.log(this.editor);
  }
}
