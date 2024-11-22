import { PartialType } from '@nestjs/mapped-types';
import { CreateCatsMDto } from './create-cats-m.dto';

export class UpdateCatsMDto extends PartialType(CreateCatsMDto) {
  id: number;
}
