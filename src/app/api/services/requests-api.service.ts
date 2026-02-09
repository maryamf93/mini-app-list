import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ApiService } from '@app/core/services/api.service';
import { RequestsListResponse } from '@app/api/models/requests-list-reponse.model';
import { mapRequestDtoToVM } from '@app/core/mappers/request.mapper';
import { RequestVM } from '@app/shared/models/request.vm.model';
import { API_PATHS } from '../api-paths';

@Injectable({
  providedIn: 'root',
})
export class RequestsApiService {
  private apiService = inject(ApiService);

  getRequestsApi(): Observable<RequestVM[]> {
    return this.apiService.get(API_PATHS.requests.list).pipe(
      map((res: RequestsListResponse) => res.requests.map(mapRequestDtoToVM)),
      catchError((err: any) => {
        return throwError(err);
      }),
    );
  }
}
