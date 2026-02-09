import { RequestDto } from '@app/api/models/request.dto.model';
import { RequestVM } from '@app/shared/models/request.vm.model';
import { formatDate } from '@app/core/utils/format-date-helper';

export function mapRequestDtoToVM(dto: RequestDto): RequestVM {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    createdAtFormatted: formatDate(dto.createdAt),
    status: dto.status,
  };
}
