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

  it('should return "São Paulo-SP"', async () => {
    const geocode = await service.findGeoCodeByLocal('sao paulo');
    expect(geocode[0].id).toBe('São Paulo-SP');
  });

  it('should return "Praia Grande-SP"', async () => {
    const geocode = await service.findGeoCodeByLocal('praia grande');
    expect(geocode[1].id).toBe('Praia Grande-SP');
  });

  it('should return "Praia Grande"', async () => {
    const clima = await service.findOneByLocal('praia grande');
    const today = new Date().toISOString();
    const todaySplit = today.split('T')[0].split('-');
    const todayBRFormat = `${todaySplit[2]}/${todaySplit[1]}/${todaySplit[0]}`;
    const obj = clima['4213807'][todayBRFormat].manha;
    expect(obj.entidade).toBe('Praia Grande');
  });

  it('should return "São Paulo"', async () => {
    const clima = await service.findOneByLocal('sao paulo');
    const today = new Date().toISOString();
    const todaySplit = today.split('T')[0].split('-');
    const todayBRFormat = `${todaySplit[2]}/${todaySplit[1]}/${todaySplit[0]}`;
    const obj = clima['3550308'][todayBRFormat].manha;
    expect(obj.entidade).toBe('São Paulo');
  });
});
