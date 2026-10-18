import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { Visita } from '../../visitas/entities/visita.entity';

@Entity('VISITANTES')
export class Visitante {
  @PrimaryGeneratedColumn({ name: 'ID_VISITANTE' })
  ID_VISITANTE: number;

  @Column({ name: 'ID_PESSOA', type: 'int', nullable: true })
  ID_PESSOA: number;

  @Column({ name: 'DOCUMENTO', type: 'varchar', length: 14, nullable: true })
  DOCUMENTO: string;

  @ManyToOne(() => Pessoa, pessoa => pessoa.visitantes)
  @JoinColumn({ name: 'ID_PESSOA' })
  pessoa: Pessoa;

  @OneToMany(() => Visita, visita => visita.visitante)
  visitas: Visita[];
}
