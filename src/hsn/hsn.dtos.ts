import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateHsnDto {
  @IsNotEmpty()
  hsnNo: string;

  @IsNotEmpty()
  @IsNumberString()
  gst: string;
}
