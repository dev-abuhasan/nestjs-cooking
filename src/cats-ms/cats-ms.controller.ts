import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CatsMsService } from './cats-ms.service';
import { CreateCatsMDto } from './dto/create-cats-m.dto';
import { UpdateCatsMDto } from './dto/update-cats-m.dto';

@Controller()
export class CatsMsController {
  constructor(private readonly catsMsService: CatsMsService) {}

  @MessagePattern('createCatsM')
  create(@Payload() createCatsMDto: CreateCatsMDto) {
    return this.catsMsService.create(createCatsMDto);
  }

  @MessagePattern('findAllCatsMs')
  findAll() {
    return this.catsMsService.findAll();
  }

  @MessagePattern('findOneCatsM')
  findOne(@Payload() id: number) {
    return this.catsMsService.findOne(id);
  }

  @MessagePattern('updateCatsM')
  update(@Payload() updateCatsMDto: UpdateCatsMDto) {
    return this.catsMsService.update(updateCatsMDto.id, updateCatsMDto);
  }

  @MessagePattern('removeCatsM')
  remove(@Payload() id: number) {
    return this.catsMsService.remove(id);
  }
}
