import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasculinoPage } from './masculino.page';

describe('MasculinoPage', () => {
  let component: MasculinoPage;
  let fixture: ComponentFixture<MasculinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MasculinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
