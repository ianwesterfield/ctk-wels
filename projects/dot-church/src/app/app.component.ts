import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CtkNgComponent } from '@ctk-wels/ctk-ng';

@Component({
  standalone: true,
  imports: [RouterModule, MatIconModule, MatDividerModule, MatButtonModule, CtkNgComponent],
  selector: 'church-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
