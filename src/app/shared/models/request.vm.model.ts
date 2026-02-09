import { RequestStatus } from '@app/core/enums/request-status.enum';

/**
 * RequestVM
 * ----------------
 * UI-friendly representation of a Request.
 * Contains formatted and derived fields for rendering.
 * Safe to use directly in templates.
 */
export interface RequestVM {
  id: number;
  title: string;
  description: string;
  status: RequestStatus;
  createdAtFormatted: string; // Derived field for display purposes
}
