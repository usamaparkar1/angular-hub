import { TestBed } from '@angular/core/testing';
import { testResolver } from './test.resolver';
import { ResolveFn } from '@angular/router';
import { TestData } from '../models/data';

describe('testResolver', () => {
  const executeResolver: ResolveFn<Promise<TestData[]>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => testResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});