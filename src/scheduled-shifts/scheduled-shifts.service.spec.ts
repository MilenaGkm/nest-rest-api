import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledShiftsService } from './scheduled-shifts.service';

describe('ScheduledShiftsService', () => {
  let service: ScheduledShiftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduledShiftsService],
    }).compile();

    service = module.get<ScheduledShiftsService>(ScheduledShiftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
