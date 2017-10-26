import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDelegatedDomainComponent } from './pre-delegated-domain.component';

describe('PreDelegatedDomainComponent', () => {
  let component: PreDelegatedDomainComponent;
  let fixture: ComponentFixture<PreDelegatedDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreDelegatedDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDelegatedDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
