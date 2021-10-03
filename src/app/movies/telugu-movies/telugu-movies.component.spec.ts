import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguMoviesComponent } from './telugu-movies.component';

describe('TeluguMoviesComponent', () => {
  let component: TeluguMoviesComponent;
  let fixture: ComponentFixture<TeluguMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeluguMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeluguMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
