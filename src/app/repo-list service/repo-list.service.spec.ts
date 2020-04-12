import { TestBed } from '@angular/core/testing';

import { RepoListService } from './repo-list.service';

describe('RepoListService', () => {
  let service: RepoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
