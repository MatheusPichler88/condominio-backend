import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visita } from './entities/visita.entity';

@Injectable()
export class VisitasService {
  constructor(
    @InjectRepository(Visita)
    private visitasRepository: Repository<Visita>,
  ) {}

  findAll(): Promise<Visita[]> {
    return this.visitasRepository.find();
  }

  findOne(id: number): Promise<Visita | null> {
    return this.visitasRepository.findOneBy({ ID_VISITA: id });
  }

  create(visita: Partial<Visita>): Promise<Visita> {
    const novaVisita = this.visitasRepository.create(visita);
    return this.visitasRepository.save(novaVisita);
  }

  async update(id: number, visita: Partial<Visita>): Promise<Visita | null> {
    await this.visitasRepository.update(id, visita);
    return this.visitasRepository.findOneBy({ ID_VISITA: id });
  }

  async remove(id: number): Promise<void> {
    await this.visitasRepository.delete(id);
  }
}
