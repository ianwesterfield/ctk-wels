import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PressHeaderComponent } from 'dist/projects/press/components/header';

@Component({
  imports: [CommonModule, MatButtonModule, MatSidenavModule, RouterModule, PressHeaderComponent],
  selector: 'press-shell',
  standalone: true,
  styleUrls: ['./shell.component.scss'],
  templateUrl: './shell.component.html',
})
export class PressShellComponent {
  constructor(@Inject('APP_CONFIG') public config: any) {}
}
