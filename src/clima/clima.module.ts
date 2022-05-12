import { Module } from '@nestjs/common';
import { ClimaService } from './clima.service';
import { ClimaController } from './clima.controller';

@Module({
  controllers: [ClimaController],
  providers: [ClimaService],
})
export class ClimaModule {}
