import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraComponent } from './extra.component';

describe('ExtraComponent', () => {
  let component: ExtraComponent;
  let fixture: ComponentFixture<ExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
