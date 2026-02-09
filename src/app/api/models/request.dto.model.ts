import { RequestStatus } from '@app/core/enums/request-status.enum';

/**
 * RequestDto
 * ----------------
 * Raw data structure returned by the backend API.
 * Mirrors the API contract and should not contain UI-specific logic.
 */
export interface RequestDto {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: RequestStatus;
}
