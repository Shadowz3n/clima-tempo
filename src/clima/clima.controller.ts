import { Controller, Get, Param, Version } from '@nestjs/common';
import { ClimaService } from './clima.service';

@Controller('clima')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Get(':local')
  @Version('1')
  async findOne(@Param('local') local: string) {
    return await this.climaService.findOneByLocal(local);
  }
}
