import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Visitante } from '../../visitantes/entities/visitante.entity';
import { Unidade } from '../../unidades/entities/unidade.entity';
import { Morador } from '../../moradores/entities/morador.entity';

@Entity('VISITAS')
export class Visita {
  @PrimaryGeneratedColumn({ name: 'ID_VISITA' })
  ID_VISITA: number;

  @Column({ name: 'ID_VISITANTE', type: 'int', nullable: true })
  ID_VISITANTE: number;

  @Column({ name: 'ID_UNIDADE', type: 'int', nullable: true })
  ID_UNIDADE: number;

  @Column({ name: 'ID_MORADOR', type: 'int', nullable: true })
  ID_MORADOR: number;

  @Column({ name: 'PLACA_VEICULO', type: 'varchar', length: 10, nullable: true })
  PLACA_VEICULO: string;

  @Column({ name: 'DATA_ENTRADA', type: 'datetime', nullable: true })
  DATA_ENTRADA: Date;

  @Column({ name: 'DATA_SAIDA', type: 'datetime', nullable: true })
  DATA_SAIDA: Date;

  @ManyToOne(() => Visitante, visitante => visitante.visitas)
  @JoinColumn({ name: 'ID_VISITANTE' })
  visitante: Visitante;

  @ManyToOne(() => Unidade, unidade => unidade.visitas)
  @JoinColumn({ name: 'ID_UNIDADE' })
  unidade: Unidade;

  @ManyToOne(() => Morador, morador => morador.visitas)
  @JoinColumn({ name: 'ID_MORADOR' })
  morador: Morador;
}
