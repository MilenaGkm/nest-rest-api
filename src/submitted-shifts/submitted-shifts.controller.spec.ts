import { Test, TestingModule } from '@nestjs/testing';
import { SubmittedShiftsController } from './submitted-shifts.controller';

describe('SubmittedShiftsController', () => {
  let controller: SubmittedShiftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmittedShiftsController],
    }).compile();

    controller = module.get<SubmittedShiftsController>(SubmittedShiftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
