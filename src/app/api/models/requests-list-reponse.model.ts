import { RequestDto } from '@app/api/models/request.dto.model';
import { ApiResult } from '@app/core/models/api-result.model';

export interface RequestsListResponse extends ApiResult {
  requests: RequestDto[];
}
