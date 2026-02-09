import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RequestStatus } from '@app/core/enums/request-status.enum';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';
import { HighlightPipe } from '@app/shared/pipes/highlight.pipe';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [StatusBadgeComponent, StatusBadgeComponent, HighlightPipe],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  createdAt = input.required<string>();
  status = input.required<RequestStatus>();
  searchTerm = input<string>(''); // optional, defaults to ''
}
