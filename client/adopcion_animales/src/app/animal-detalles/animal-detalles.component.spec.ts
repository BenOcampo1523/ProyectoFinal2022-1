import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetallesComponent } from './animal-detalles.component';

describe('AnimalDetallesComponent', () => {
  let component: AnimalDetallesComponent;
  let fixture: ComponentFixture<AnimalDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
