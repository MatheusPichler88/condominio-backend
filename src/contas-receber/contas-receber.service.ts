import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContaReceber } from './entities/conta-receber.entity';

@Injectable()
export class ContasReceberService {
  constructor(
    @InjectRepository(ContaReceber)
    private contasReceberRepository: Repository<ContaReceber>,
  ) {}

  findAll(): Promise<ContaReceber[]> {
    return this.contasReceberRepository.find();
  }

  findOne(id: number): Promise<ContaReceber | null> {
    return this.contasReceberRepository.findOneBy({ ID_CONTA_RECEBER: id });
  }

  create(contaReceber: Partial<ContaReceber>): Promise<ContaReceber> {
    const novaContaReceber = this.contasReceberRepository.create(contaReceber);
    return this.contasReceberRepository.save(novaContaReceber);
  }

  async update(id: number, contaReceber: Partial<ContaReceber>): Promise<ContaReceber | null> {
    await this.contasReceberRepository.update(id, contaReceber);
    return this.contasReceberRepository.findOneBy({ ID_CONTA_RECEBER: id });
  }

  async remove(id: number): Promise<void> {
    await this.contasReceberRepository.delete(id);
  }
}
