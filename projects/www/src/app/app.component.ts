import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ShellComponent } from "@ctk/press/components/shell/shell.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ShellComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "www";
}
