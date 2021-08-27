import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledShiftsController } from './scheduled-shifts.controller';

describe('ScheduledShiftsController', () => {
  let controller: ScheduledShiftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduledShiftsController],
    }).compile();

    controller = module.get<ScheduledShiftsController>(ScheduledShiftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
