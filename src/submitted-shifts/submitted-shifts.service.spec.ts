import { Test, TestingModule } from '@nestjs/testing';
import { SubmittedShiftsService } from './submitted-shifts.service';

describe('SubmittedShiftsService', () => {
  let service: SubmittedShiftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmittedShiftsService],
    }).compile();

    service = module.get<SubmittedShiftsService>(SubmittedShiftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
