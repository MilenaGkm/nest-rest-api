import { Test, TestingModule } from '@nestjs/testing';
import { MsgsController } from './msgs.controller';

describe('MsgsController', () => {
  let controller: MsgsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsgsController],
    }).compile();

    controller = module.get<MsgsController>(MsgsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
