import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { ContratoRH } from '../../contratos-rh/entities/contrato-rh.entity';

@Entity('FUNCIONARIOS')
export class Funcionario {
  @PrimaryGeneratedColumn({ name: 'ID_FUNCIONARIO' })
  ID_FUNCIONARIO: number;

  @Column({ name: 'ID_PESSOA', type: 'int', nullable: true })
  ID_PESSOA: number;

  @Column({ name: 'FUNCAO', type: 'varchar', length: 100, nullable: true })
  FUNCAO: string;

  @Column({ name: 'DATA_ADMISSAO', type: 'date', nullable: true })
  DATA_ADMISSAO: Date;

  @Column({ name: 'SALARIO', type: 'decimal', precision: 10, scale: 2, nullable: true })
  SALARIO: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.funcionarios)
  @JoinColumn({ name: 'ID_PESSOA' })
  pessoa: Pessoa;

  @OneToMany(() => ContratoRH, contratoRh => contratoRh.funcionario)
  contratos: ContratoRH[];
}
