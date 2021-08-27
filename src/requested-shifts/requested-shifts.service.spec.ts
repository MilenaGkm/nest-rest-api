import { Test, TestingModule } from '@nestjs/testing';
import { RequestedShiftsService } from './requested-shifts.service';

describe('RequestedShiftsService', () => {
  let service: RequestedShiftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestedShiftsService],
    }).compile();

    service = module.get<RequestedShiftsService>(RequestedShiftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
