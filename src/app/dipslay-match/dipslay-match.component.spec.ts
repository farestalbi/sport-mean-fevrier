import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipslayMatchComponent } from './dipslay-match.component';

describe('DipslayMatchComponent', () => {
  let component: DipslayMatchComponent;
  let fixture: ComponentFixture<DipslayMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipslayMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipslayMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
