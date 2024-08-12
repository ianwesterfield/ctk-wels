import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  StoryBlokComponents,
  StoryblokService,
} from '@ctk/press/components/storyblok';
import { WINDOW } from '@ctk/press/services/window';
import { DynamicModule } from 'ng-dynamic-component';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';

declare global {
  interface Window {
    storyblok: any;
  }
}

@Component({
  selector: 'dc-storyblok-poc',
  standalone: true,
  imports: [
    CommonModule,
    DynamicModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    LayoutModule,
  ],
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoryblokPocComponent implements OnInit, OnDestroy {
  story = { content: null, name: '' };
  components = StoryBlokComponents;
  isViewportSmall = false;

  private destroyed: Subject<void> = new Subject<void>();
  private gridArea: { rows: number | string; cols: number | string }[] = [
    { rows: 1, cols: 'span 6' },
  ];

  constructor(
    @Inject(WINDOW) private window: Window,
    private breakpointObserver: BreakpointObserver,
    private storyblokService: StoryblokService,
  ) {
    this.window.storyblok.init();

    this.window.storyblok.on(['change', 'published'], function () {
      console.log('storyblok event (change or published) received');
      location.reload();
    });

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        console.log(result, this.isViewportSmall);
      });
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit() {
    this.storyblokService
      .getStories({ version: 'draft' })
      .subscribe((values) => {
        this.story = values.data.stories[0];
      });
  }
}
