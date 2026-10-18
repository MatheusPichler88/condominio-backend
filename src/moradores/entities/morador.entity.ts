import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { Unidade } from '../../unidades/entities/unidade.entity';
import { Reserva } from '../../reservas/entities/reserva.entity';
import { Boleto } from '../../boletos/entities/boleto.entity';
import { Visita } from '../../visitas/entities/visita.entity';
import { ContaReceber } from '../../contas-receber/entities/conta-receber.entity';

@Entity('MORADORES')
export class Morador {
  @PrimaryGeneratedColumn({ name: 'ID_MORADOR' })
  ID_MORADOR: number;

  @Column({ name: 'ID_PESSOA', type: 'int', nullable: true })
  ID_PESSOA: number;

  @Column({ name: 'ID_UNIDADE', type: 'int', nullable: true })
  ID_UNIDADE: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.moradores)
  @JoinColumn({ name: 'ID_PESSOA' })
  pessoa: Pessoa;

  @ManyToOne(() => Unidade, unidade => unidade.moradores)
  @JoinColumn({ name: 'ID_UNIDADE' })
  unidade: Unidade;

  @OneToMany(() => Reserva, reserva => reserva.morador)
  reservas: Reserva[];

  @OneToMany(() => Boleto, boleto => boleto.morador)
  boletos: Boleto[];

  @OneToMany(() => Visita, visita => visita.morador)
  visitas: Visita[];

  @OneToMany(() => ContaReceber, contaReceber => contaReceber.morador)
  contasReceber: ContaReceber[];
}
