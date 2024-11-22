import { PartialType } from '@nestjs/mapped-types';
import { CreateCatsWDto } from './create-cats-w.dto';

export class UpdateCatsWDto extends PartialType(CreateCatsWDto) {
  id: number;
}
