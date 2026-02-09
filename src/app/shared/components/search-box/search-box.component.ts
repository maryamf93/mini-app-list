import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  inject,
  DestroyRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  private destroyRef = inject(DestroyRef);
  /** UI */
  placeholder = input<string>('Search...');

  /** Behavior */
  realtime = input(false);
  debounceMs = input(300);
  minLength = input(1);

  /** Output */
  search = output<string>();

  control = new FormControl('', { nonNullable: true });

  constructor() {
    this.setupRealtimeSearch();
  }

  private setupRealtimeSearch() {
    this.control.valueChanges
      .pipe(
        debounceTime(this.debounceMs()),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((value) => {
        const trimmed = value.trim();
        // Always emit empty string
        if (
          trimmed.length === 0 ||
          (this.realtime() && trimmed.length >= this.minLength())
        ) {
          this.search.emit(trimmed);
        }
      });
  }

  onSubmit() {
    const value = this.control.value.trim();
    if (value.length >= this.minLength()) {
      this.search.emit(value);
    }
  }

  clear() {
    this.control.setValue('');
    this.search.emit('');
  }
}
