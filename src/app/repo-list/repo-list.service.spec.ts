import { TestBed } from '@angular/core/testing';

import { RepoListService } from '../profile/repo-list service/repo-list.service';

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
