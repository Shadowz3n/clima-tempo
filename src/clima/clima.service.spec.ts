import { Test, TestingModule } from '@nestjs/testing';
import { ClimaService } from './clima.service';

describe('ClimaService', () => {
  let service: ClimaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimaService],
    }).compile();

    service = module.get<ClimaService>(ClimaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
