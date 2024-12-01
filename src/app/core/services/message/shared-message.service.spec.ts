import { TestBed } from '@angular/core/testing';

import { SharedMessageService } from './shared-message.service';
import { MessageService } from 'primeng/api';

describe('SharedMessageService', () => {
  let service: SharedMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedMessageService, MessageService]
    });
    service = TestBed.inject(SharedMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
