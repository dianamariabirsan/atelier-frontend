import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybasketCardComponent } from './mybasket-card.component';

describe('MybasketCardComponent', () => {
  let component: MybasketCardComponent;
  let fixture: ComponentFixture<MybasketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybasketCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybasketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
