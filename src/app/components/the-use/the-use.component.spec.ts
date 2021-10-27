import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUseComponent } from './the-use.component';

describe('TheUseComponent', () => {
  let component: TheUseComponent;
  let fixture: ComponentFixture<TheUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
