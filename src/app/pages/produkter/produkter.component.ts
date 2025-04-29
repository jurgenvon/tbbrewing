import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BeerModalComponent } from '../../modal/beer-modal/beer-modal.component';

@Component({
  selector: 'app-produkter',
  standalone: true,
  imports: [RouterModule, MatButtonModule, CommonModule],
  templateUrl: './produkter.component.html',
  styleUrl: './produkter.component.css',
})
export class ProdukterComponent {

  ipaItems = ['IPA Item 1', 'IPA Item 2', 'IPA Item 3'];
  apaItems = ['smashkens', 'smasked monkey'];
  resten = ['LAGER', 'VETEÖL', 'SURÖL'];
  activeItems: string[] = [];
  currentIndex = 0;
  showingItems = false;

  constructor(private dialog: MatDialog) {}

  showItems(type: string) {
    if (type === 'IPA') {
      this.activeItems = this.ipaItems;
    } else if (type === 'APA') {
      this.activeItems = this.apaItems;
    } else {
      this.activeItems = this.resten;
    }
    this.currentIndex = 0;
    this.showingItems = true;
  }

  prevItem() {
    this.currentIndex = (this.currentIndex === 0) ? this.activeItems.length - 1 : this.currentIndex - 1;
  }

  nextItem() {
    this.currentIndex = (this.currentIndex === this.activeItems.length - 1) ? 0 : this.currentIndex + 1;
  }

  openModal(item: any) {
    this.dialog.open(BeerModalComponent, {
      data: item,
      width: '400px'
    });
  }

}
