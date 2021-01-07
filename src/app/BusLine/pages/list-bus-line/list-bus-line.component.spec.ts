import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusLineComponent } from './list-bus-line.component';

describe('ListBusLineComponent', () => {
  let component: ListBusLineComponent;
  let fixture: ComponentFixture<ListBusLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBusLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBusLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
