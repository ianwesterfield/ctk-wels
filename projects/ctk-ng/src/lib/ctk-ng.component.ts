/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ctkng',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './ctk-ng.component.html',
  styleUrl: './ctk-ng.component.scss',
})
export class CtkNgComponent {}
