import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { AreasComunsService } from './areas-comuns.service';
import { AreaComum } from './entities/area-comum.entity';

@Controller('areas-comuns')
export class AreasComunsController {
  constructor(private readonly areasComunsService: AreasComunsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() areaComum: Partial<AreaComum>) {
    return this.areasComunsService.create(areaComum);
  }

  @Get()
  findAll() {
    return this.areasComunsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areasComunsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() areaComum: Partial<AreaComum>) {
    return this.areasComunsService.update(+id, areaComum);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areasComunsService.remove(+id);
  }
}
