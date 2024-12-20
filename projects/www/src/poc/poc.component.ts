import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { ArticleComponent } from "@ctk/press/components/article";
import { CardGridDirective } from "@ctk/press/directives/card-grid";
import { StoryblokService, WINDOW } from "@ctk/press/services";
import { Subject } from "rxjs";

declare global {
  interface Window {
    storyblok: any;
  }
}

@Component({
  selector: "app-poc",
  standalone: true,
  imports: [
    CommonModule,
    ArticleComponent,
    CardGridDirective,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    LayoutModule,
  ],
  templateUrl: "./poc.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class StoryblokPocComponent implements OnInit, OnDestroy {
  article: any = { content: null, name: "" };

  private destroyed: Subject<void> = new Subject<void>();

  constructor(
    @Inject(WINDOW) private window: Window,
    private storyblokService: StoryblokService
  ) {
    this.window.storyblok.init();

    this.window.storyblok.on(["change", "published"], function () {
      location.reload();
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit() {
    this.storyblokService
      .getStories({ version: "draft" })
      .subscribe((value) => {
        this.article = value.data.stories[0];
      });
  }

  get gridItemArea() {
    return "1 / 3";
  }
}
