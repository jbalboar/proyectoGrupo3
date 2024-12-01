import { TestBed } from '@angular/core/testing';

import { TareaService } from './tarea.service';
import { HttpClientModule } from '@angular/common/http';

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TareaService]
    });
    service = TestBed.inject(TareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
