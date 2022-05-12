import { Injectable } from '@nestjs/common';
import { instanceInmet } from '../api/instance';
import { ClimaGeocodeResDto } from './dto/clima-geocode.res.dto';
import { ClimaResDto } from './dto/clima.res.dto';

@Injectable()
export class ClimaService {
  private async findGeoCodeByLocal(
    local: string,
  ): Promise<ClimaGeocodeResDto[]> {
    const geocode = await instanceInmet.get<ClimaGeocodeResDto[]>(
      `autocomplete/${local}`,
    );
    return geocode.data;
  }

  public async findOneByLocal(local: string): Promise<ClimaResDto> {
    const geocodeResponse = await this.findGeoCodeByLocal(local);
    if (geocodeResponse.length == 0) {
      return;
    }

    const geocode = geocodeResponse[0].geocode;
    const prev = await instanceInmet.get<ClimaResDto>(`previsao/${geocode}`);
    return prev.data;
  }
}
