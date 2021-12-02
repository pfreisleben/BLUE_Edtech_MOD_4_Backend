import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsString()
  sinopse: string;
}
