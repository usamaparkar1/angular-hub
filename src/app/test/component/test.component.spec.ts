import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    })
    .compileComponents();
    
    testFixture = TestBed.createComponent(TestComponent);
    testComponent = testFixture.componentInstance;
    testFixture.detectChanges();
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });
});