import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentverifyComponent } from './documentverify.component';

describe('DocumentverifyComponent', () => {
  let component: DocumentverifyComponent;
  let fixture: ComponentFixture<DocumentverifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentverifyComponent]
    });
    fixture = TestBed.createComponent(DocumentverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
