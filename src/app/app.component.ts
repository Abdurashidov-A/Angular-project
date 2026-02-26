import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly tabs = ['Тип 1', 'Тип 2'];
  readonly items: Item[] = [
    { id: 1, name: 'Item 1', value: 20 },
    { id: 2, name: 'Item 2', value: 30 },
    { id: 3, name: 'Item 3', value: 40 },
    { id: 4, name: 'Item 4', value: 50 }
  ];

  activeTab = this.tabs[0];
  selectedIds = new Set<number>([3]);

  get selectedItems(): Item[] {
    return this.items.filter((item) => this.selectedIds.has(item.id));
  }

  get totalValue(): number {
    return this.selectedItems.reduce((sum, item) => sum + item.value, 0);
  }

  get selectedCount(): number {
    return this.selectedItems.length;
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleItem(id: number): void {
    if (this.selectedIds.has(id)) {
      this.selectedIds.delete(id);
    } else {
      this.selectedIds.add(id);
    }

    this.selectedIds = new Set(this.selectedIds);
  }

  isSelected(id: number): boolean {
    return this.selectedIds.has(id);
  }

  trackById(_index: number, item: Item): number {
    return item.id;
  }
}
