import { TestBed } from '@angular/core/testing';

import { AutoPublishNpmNgService } from './auto-publish-npm-ng.service';

describe('AutoPublishNpmNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoPublishNpmNgService = TestBed.get(AutoPublishNpmNgService);
    expect(service).toBeTruthy();
  });
});
