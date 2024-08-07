import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PressHeaderComponent } from '../../header';

@Component({
  selector: 'press-shell',
  imports: [CommonModule, RouterModule, PressHeaderComponent],
  standalone: true,
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class PressShellComponent {}
