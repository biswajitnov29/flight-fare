import { TestBed } from '@angular/core/testing';

import { App.DataService } from './app.data.service';

describe('App.DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: App.DataService = TestBed.get(App.DataService);
    expect(service).toBeTruthy();
  });
});
