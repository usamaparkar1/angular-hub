import { TestBed } from '@angular/core/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  let testService: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    testService = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(testService).toBeTruthy();
  });
});