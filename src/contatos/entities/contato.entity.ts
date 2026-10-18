import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';

@Entity('CONTATOS')
export class Contato {
  @PrimaryGeneratedColumn({ name: 'ID_CONTATO' })
  ID_CONTATO: number;

  @Column({ name: 'ID_PESSOA', type: 'int', nullable: true })
  ID_PESSOA: number;

  @Column({ name: 'TIPO_CONTATO', type: 'varchar', length: 200, nullable: true })
  TIPO_CONTATO: string;

  @Column({ name: 'VALOR_CONTATO', type: 'varchar', length: 200, nullable: true })
  VALOR_CONTATO: string;

  @ManyToOne(() => Pessoa, pessoa => pessoa.contatos)
  @JoinColumn({ name: 'ID_PESSOA' })
  pessoa: Pessoa;
}
