import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Service } from '../services/service';

export const orderResolver: ResolveFn<any> = () => {


  const dataService = inject(Service);

  return dataService.getOrders();
};
