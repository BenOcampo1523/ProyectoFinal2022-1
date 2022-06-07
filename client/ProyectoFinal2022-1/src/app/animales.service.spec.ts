import { TestBed } from "@angular/core/testing";
import { AnimalesService } from "./animales.service";

describe('AnimalesService', () => {
  let service: AnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalesService);
  });

  it('Debe crearse', () => {
    expect(service).toBeTruthy();
  })
})
