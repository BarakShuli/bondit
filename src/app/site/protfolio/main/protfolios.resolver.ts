import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ApiService } from 'src/app/service/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { map, mergeAll, merge,flatMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable()
export class APIResolver implements Resolve<Observable<object[]>> {
	protfoliosList:any;
  constructor(private apiService: ApiService) {}

  resolve() {
		let protfolioList = this.apiService.getProtfolios();
		let metaDataList = this.apiService.getMetaData();

		return forkJoin([protfolioList,metaDataList]);
  }
}