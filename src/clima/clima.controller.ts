import { Controller, Get, Param, Version } from '@nestjs/common';
import { ClimaService } from './clima.service';
import { ClimaResDto } from './dto/clima.res.dto';

@Controller('clima')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Get(':local')
  @Version('1')
  async findOne(@Param('local') local: string): Promise<ClimaResDto> {
    return await this.climaService.findOneByLocal(local);
  }
}
