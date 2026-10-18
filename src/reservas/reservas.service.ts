import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservasRepository: Repository<Reserva>,
  ) {}

  findAll(): Promise<Reserva[]> {
    return this.reservasRepository.find();
  }

  findOne(id: number): Promise<Reserva | null> {
    return this.reservasRepository.findOneBy({ ID_RESERVA: id });
  }

  create(reserva: Partial<Reserva>): Promise<Reserva> {
    const novaReserva = this.reservasRepository.create(reserva);
    return this.reservasRepository.save(novaReserva);
  }

  async update(id: number, reserva: Partial<Reserva>): Promise<Reserva | null> {
    await this.reservasRepository.update(id, reserva);
    return this.reservasRepository.findOneBy({ ID_RESERVA: id });
  }

  async remove(id: number): Promise<void> {
    await this.reservasRepository.delete(id);
  }
}
