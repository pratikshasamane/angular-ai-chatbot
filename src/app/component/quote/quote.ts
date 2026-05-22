import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.html',
  styleUrl: './quote.css',
})
export class Quote {
  count = signal(0);

  updatedVal = computed(() => this.count() * 2);
  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
