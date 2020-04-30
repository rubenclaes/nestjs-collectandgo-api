import { IsInt, IsString } from 'class-validator';

export class CreateSupermarketDto {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
  @IsString()
  readonly breed: string;
}
