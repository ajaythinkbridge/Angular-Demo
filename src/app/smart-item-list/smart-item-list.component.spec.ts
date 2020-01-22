import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartItemListComponent } from './smart-item-list.component';

describe('SmartItemListComponent', () => {
  let component: SmartItemListComponent;
  let fixture: ComponentFixture<SmartItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
