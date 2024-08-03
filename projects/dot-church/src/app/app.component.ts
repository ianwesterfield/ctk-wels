
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule],
  selector: 'ctk-dc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public router: Router) {}
}
