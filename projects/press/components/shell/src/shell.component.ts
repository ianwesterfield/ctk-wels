import { Component } from "@angular/core";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: "press-shell",
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: "./shell.component.html",
  styleUrl: "./shell.component.scss",
})
export class ShellComponent {}
