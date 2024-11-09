import { Component } from "@angular/core";
import { ArticleComponent } from "@ctk/press/components/article";
import { ShellComponent } from "@ctk/press/components/shell";
import { StoryblokService, WINDOW_PROVIDERS } from "@ctk/press/services";
import { config } from "../environments/environment";
import { StoryblokPocComponent } from "../poc/poc.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ShellComponent, ArticleComponent, StoryblokPocComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [
    WINDOW_PROVIDERS,
    StoryblokService,
    { provide: "APP_CONFIG", useValue: config },
  ],
})
export class AppComponent {
  title = "www";
}
