import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestmovies } from './bestmovies';

describe('Bestmovies', () => {
  let component: Bestmovies;
  let fixture: ComponentFixture<Bestmovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestmovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bestmovies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
