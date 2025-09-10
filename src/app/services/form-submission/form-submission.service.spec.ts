import { FormSubmissionService } from './form-submission.service';
import { TestBed } from '@angular/core/testing';

describe('FormSubmissionService', () => {
  let formSubmissionService: FormSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    formSubmissionService = TestBed.inject(FormSubmissionService);
  });

  it('should be created', () => {
    expect(formSubmissionService).toBeTruthy();
  });
});
