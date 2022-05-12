export interface ClimaResDto {
  T: {
    T: {
      manha: ClimaResult;
      tarde: ClimaResult;
      noite: ClimaResult;
    };
  };
}

interface ClimaResult {
  cod_icone: string;
  cod_temp_max_tende_icone: string;
  cod_temp_min_tende_icone: string;
  dia_semana: string;
  dir_vento: string;
  entidade: string;
  estacao: string;
  fonte: string;
  hora: string;
  icone: string;
  int_vento: string;
  nascer: string;
  ocaso: string;
  resumo: string;
  temp_max: string;
  temp_max_tende: string;
  temp_max_tende_icone: string;
  temp_min: string;
  temp_min_tende: string;
  temp_min_tende_icone: string;
  tempo: string;
  uf: string;
  umidade_max: string;
  umidade_min: string;
}
