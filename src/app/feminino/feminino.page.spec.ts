import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FemininoPage } from './feminino.page';

describe('FemininoPage', () => {
  let component: FemininoPage;
  let fixture: ComponentFixture<FemininoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
