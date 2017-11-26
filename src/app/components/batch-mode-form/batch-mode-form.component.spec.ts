import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchModeFormComponent } from './batch-mode-form.component';

describe('BatchModeFormComponent', () => {
  let component: BatchModeFormComponent;
  let fixture: ComponentFixture<BatchModeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchModeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchModeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
