import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'press-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './press.component.html',
  styleUrl: './press.component.scss',
})
export class PressComponent {}
