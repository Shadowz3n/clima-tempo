import { Controller, Get, Param, Version } from '@nestjs/common';
import { ClimaService } from './clima.service';
import { UpdateClimaDto } from './dto/update-clima.dto';

@Controller('clima')
export class ClimaController {
  constructor(private readonly climaService: ClimaService) {}

  @Get(':uf')
  @Version('v1')
  async findOne(@Param('uf') uf: string) {
    return await this.climaService.findOneByUF(uf);
  }
}
