import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[pressStoryblok]',
  standalone: true
})
export class StoryblokDirective implements OnInit {
  @Input() pressStoryblok: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (typeof this.pressStoryblok === 'undefined') {
      return;
    }

    let options = JSON.parse(this.pressStoryblok.replace('<!--#storyblok#', '').replace('-->', ''));

    this.el.nativeElement.setAttribute('data-blok-c', JSON.stringify(options));
    this.el.nativeElement.setAttribute('data-blok-uid', options.id + '-' + options.uid);
    this.el.nativeElement.classList.add("storyblok__outline");
  }

}
