import { CommonModule } from '@angular/common';
import {
  Component,
  signal,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  computed,
  DestroyRef,
} from '@angular/core';
import { RequestsApiService } from '@app/api/services/requests-api.service';
import { RequestCardComponent } from '@app/shared/components/request-card/request-card.component';
import { RequestVM } from '@app/shared/models/request.vm.model';
import { SearchBoxComponent } from '@app/shared/components/search-box/search-box.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-requests-list',
  standalone: true,
  imports: [CommonModule, RequestCardComponent, SearchBoxComponent],
  templateUrl: './requests-list.component.html',
  styleUrl: './requests-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestsListComponent implements OnInit {
  private requestsApiService = inject(RequestsApiService);
  private destroyRef = inject(DestroyRef);

  requests = signal<RequestVM[]>([]);
  currentSearchTerm = signal<string>('');

  noResultsFound = computed(
    () =>
      this.filteredRequests().length === 0 &&
      this.currentSearchTerm().trim() !== '',
  );
  filteredRequests = computed<RequestVM[]>(() => {
    const term = this.currentSearchTerm().trim().toLowerCase();
    const requests = this.requests();
    if (!term) {
      return requests;
    }
    return requests.filter((request) => this.matchesSearchTerm(request, term));
  });

  ngOnInit() {
    this.loadRequests();
  }

  private loadRequests() {
    this.requestsApiService
      .getRequestsApi()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (requests) => {
          this.requests.set(requests);
        },
        error: (error) => {
          console.error('Error loading requests:', error);
        },
      });
  }

  onSearch(term: string) {
    this.currentSearchTerm.set(term);
  }

  private matchesSearchTerm(
    request: RequestVM,
    normalizedTerm: string,
  ): boolean {
    return (
      request.description.toLowerCase().includes(normalizedTerm) ||
      request.title.toLowerCase().includes(normalizedTerm)
    );
  }
}
