import { TestBed } from '@angular/core/testing';

import { CadastroDevService } from './cadastro-dev.service';

describe('CadastroDevService', () => {
  let service: CadastroDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
