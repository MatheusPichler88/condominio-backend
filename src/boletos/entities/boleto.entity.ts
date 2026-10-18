import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Morador } from '../../moradores/entities/morador.entity';

@Entity('BOLETOS')
export class Boleto {
  @PrimaryGeneratedColumn({ name: 'ID_BOLETO' })
  ID_BOLETO: number;

  @Column({ name: 'ID_MORADOR', type: 'int', nullable: true })
  ID_MORADOR: number;

  @Column({ name: 'VL_BOLETO', type: 'decimal', precision: 10, scale: 2, nullable: true })
  VL_BOLETO: number;

  @Column({ name: 'DT_VENCIMENTO', type: 'date', nullable: true })
  DT_VENCIMENTO: Date;

  @Column({ name: 'BOLETO_STATUS', type: 'enum', enum: ['PAGO', 'PENDENTE', 'ATRASADO', 'EXPIRADO'], nullable: true })
  BOLETO_STATUS: string;

  @ManyToOne(() => Morador, morador => morador.boletos)
  @JoinColumn({ name: 'ID_MORADOR' })
  morador: Morador;
}
