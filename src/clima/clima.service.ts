import { Injectable } from '@nestjs/common';

@Injectable()
export class ClimaService {
  //private readonly spURL: string =
  //  'https://apiprevmet3.inmet.gov.br/previsao/3550308';

  async findOneByUF(uf: string) {
    return uf;
  }
}
