import { TestBed, async, inject } from '@angular/core/testing';

import { NotificationGuard } from './notification.guard';

describe('NotificationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationGuard]
    });
  });

  it('should ...', inject([NotificationGuard], (guard: NotificationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
