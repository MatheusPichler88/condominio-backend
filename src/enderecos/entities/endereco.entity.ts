import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';

@Entity('ENDERECOS')
export class Endereco {
  @PrimaryGeneratedColumn({ name: 'ID_ENDERECO' })
  ID_ENDERECO: number;

  @Column({ name: 'ID_PESSOA', type: 'int', nullable: true })
  ID_PESSOA: number;

  @Column({ name: 'LOGADOURO', type: 'varchar', length: 200 })
  LOGADOURO: string;

  @Column({ name: 'NUMERO', type: 'int', nullable: true })
  NUMERO: number;

  @Column({ name: 'BAIRRO', type: 'varchar', length: 50, nullable: true })
  BAIRRO: string;

  @Column({ name: 'CIDADE', type: 'varchar', length: 50, nullable: true })
  CIDADE: string;

  @Column({ name: 'UF', type: 'char', length: 2, nullable: true })
  UF: string;

  @Column({ name: 'CEP', type: 'char', length: 8 })
  CEP: string;

  @ManyToOne(() => Pessoa, pessoa => pessoa.enderecos)
  @JoinColumn({ name: 'ID_PESSOA' })
  pessoa: Pessoa;
}
