import { Component } from "@angular/core";
import { ShellComponent } from "@ctk/press/components/shell";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ShellComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "www";
}
