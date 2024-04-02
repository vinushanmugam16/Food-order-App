import { TestBed } from '@angular/core/testing';

import { EncryptDecryptService } from './encryptDecrypt.service';

describe('EncryptDecryptService', () => {
  let service: EncryptDecryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptDecryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
