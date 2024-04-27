import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
<<<<<<< HEAD
import EnderecoEntity from "./EnderecoEntity";
=======
import EnderecoEntity from "./Endereco";
>>>>>>> master
import PetEntity from "./PetEntity";
import { criaSenhaCriptografada } from "../utils/senhaCriptografada";

@Entity()
export default class AdotanteEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  senha: string;
<<<<<<< HEAD
  @Column({unique:true})
=======
  @Column({ unique: true })
>>>>>>> master
  celular: string;
  @Column({ nullable: true })
  foto?: string;

  @OneToOne(() => EnderecoEntity, {
    nullable: true,
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  endereco?: EnderecoEntity;
<<<<<<< HEAD
  
=======
>>>>>>> master
  @OneToMany(() => PetEntity, (pet) => pet.adotante)
  pets!: PetEntity[];

  constructor(
    nome: string,
    senha: string,
    celular: string,
    foto?: string,
    endereco?: EnderecoEntity
  ) {
    this.nome = nome;
    this.senha = senha;
    this.foto = foto;
    this.celular = celular;
    this.endereco = endereco;
  }

<<<<<<< HEAD


  @BeforeInsert()
  @BeforeUpdate()
  private async criptografaSenha(senha:string){
    this.senha=criaSenhaCriptografada(this.senha);
  }


=======
  @BeforeInsert()
  @BeforeUpdate()
  private async criptografaSenha(senha: string) {
    this.senha = criaSenhaCriptografada(this.senha);
  }
>>>>>>> master
}
