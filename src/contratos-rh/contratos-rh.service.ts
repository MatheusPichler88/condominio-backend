import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContratoRH } from './entities/contrato-rh.entity';

@Injectable()
export class ContratosRhService {
  constructor(
    @InjectRepository(ContratoRH)
    private contratosRhRepository: Repository<ContratoRH>,
  ) {}

  findAll(): Promise<ContratoRH[]> {
    return this.contratosRhRepository.find();
  }

  findOne(id: number): Promise<ContratoRH | null> {
    return this.contratosRhRepository.findOneBy({ ID_CONTRATO_RH: id });
  }

  create(contratoRh: Partial<ContratoRH>): Promise<ContratoRH> {
    const novoContratoRh = this.contratosRhRepository.create(contratoRh);
    return this.contratosRhRepository.save(novoContratoRh);
  }

  async update(id: number, contratoRh: Partial<ContratoRH>): Promise<ContratoRH | null> {
    await this.contratosRhRepository.update(id, contratoRh);
    return this.contratosRhRepository.findOneBy({ ID_CONTRATO_RH: id });
  }

  async remove(id: number): Promise<void> {
    await this.contratosRhRepository.delete(id);
  }
}
