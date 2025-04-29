import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-beer-modal',
  templateUrl: './beer-modal.component.html',
  styleUrls: ['./beer-modal.component.css']
})
export class BeerModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public beer: { name: string; description: string }) {}
}
