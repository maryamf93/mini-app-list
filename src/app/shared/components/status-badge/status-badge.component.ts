// shared/components/status-badge/status-badge.component.ts
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestStatus } from '@app/core/enums/request-status.enum';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgeComponent {
  status = input.required<RequestStatus>();

  readonly REQUEST_STATUS_UI: Record<
    RequestStatus,
    { label: string; class: string }
  > = {
    [RequestStatus.PENDING]: {
      label: 'Pending',
      class: 'status-pending',
    },
    [RequestStatus.APPROVED]: {
      label: 'Approved',
      class: 'status-approved',
    },
    [RequestStatus.REJECTED]: {
      label: 'Rejected',
      class: 'status-rejected',
    },
  };
}
