import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepresentativesPage } from './representatives.page';

describe('RepresentativesPage', () => {
  let component: RepresentativesPage;
  let fixture: ComponentFixture<RepresentativesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
