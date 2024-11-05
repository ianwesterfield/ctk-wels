import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "prs-shell",
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: "./shell.component.html",
  styleUrl: "./shell.component.scss",
})
export class ShellComponent {}
