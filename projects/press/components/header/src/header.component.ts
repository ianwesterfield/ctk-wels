import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, RouterModule],
  selector: 'press-header',
  standalone: true,
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class PressHeaderComponent {
  constructor(@Inject('APP_CONFIG') public config: any) {}
}
