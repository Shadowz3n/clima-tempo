import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClimaModule } from './clima/clima.module';

@Module({
  imports: [ClimaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
