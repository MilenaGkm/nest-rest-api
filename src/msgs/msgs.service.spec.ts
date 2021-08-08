import { Test, TestingModule } from '@nestjs/testing';
import { MsgsService } from './msgs.service';

describe('MsgsService', () => {
  let service: MsgsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsgsService],
    }).compile();

    service = module.get<MsgsService>(MsgsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
