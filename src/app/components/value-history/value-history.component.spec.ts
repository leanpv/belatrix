import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueHistoryComponent } from './value-history.component';

describe('ValueHistoryComponent', () => {
  let component: ValueHistoryComponent;
  let fixture: ComponentFixture<ValueHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
