import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { CatsWsService } from './cats-ws.service';
import { CreateCatsWDto } from './dto/create-cats-w.dto';
import { UpdateCatsWDto } from './dto/update-cats-w.dto';

@WebSocketGateway()
export class CatsWsGateway {
  constructor(private readonly catsWsService: CatsWsService) {}

  @SubscribeMessage('createCatsW')
  create(@MessageBody() createCatsWDto: CreateCatsWDto) {
    return this.catsWsService.create(createCatsWDto);
  }

  @SubscribeMessage('findAllCatsWs')
  findAll() {
    return this.catsWsService.findAll();
  }

  @SubscribeMessage('findOneCatsW')
  findOne(@MessageBody() id: number) {
    return this.catsWsService.findOne(id);
  }

  @SubscribeMessage('updateCatsW')
  update(@MessageBody() updateCatsWDto: UpdateCatsWDto) {
    return this.catsWsService.update(updateCatsWDto.id, updateCatsWDto);
  }

  @SubscribeMessage('removeCatsW')
  remove(@MessageBody() id: number) {
    return this.catsWsService.remove(id);
  }
}
