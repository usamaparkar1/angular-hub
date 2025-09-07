import { TestService } from '../service/test.service';
import { ResolveFn } from '@angular/router';
import { TestData } from '../models/data';
import { inject } from '@angular/core';

export const testResolver: ResolveFn<Promise<TestData[]>> = async (route, state) => {

  const testService = inject(TestService);
  const productId = route.paramMap.get('productId');
  return await testService.getTestDataFromBackend(productId);
};
