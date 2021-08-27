import { Test, TestingModule } from '@nestjs/testing';
import { RequestedShiftsController } from './requested-shifts.controller';

describe('RequestedShiftsController', () => {
  let controller: RequestedShiftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestedShiftsController],
    }).compile();

    controller = module.get<RequestedShiftsController>(RequestedShiftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
