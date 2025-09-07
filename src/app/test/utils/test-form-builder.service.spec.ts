import { TestFormBuilderService } from './test-form-builder.service';
import { TestBed } from '@angular/core/testing';

describe('TestFormBuilderService', () => {
  let testFormBuilderService: TestFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    testFormBuilderService = TestBed.inject(TestFormBuilderService);
  });

  it('should be created', () => {
    expect(testFormBuilderService).toBeTruthy();
  });
});