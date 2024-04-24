import { Column, Entity, PrimaryGeneratedColumn,OneToOne,JoinColumn,OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import EnderecoEntity from "./EnderecoEntity";
import PetEntity from "./PetEntity";
import { criaSenhaCriptografada } from "../utils/senhaCriptografada";

@Entity()
export default class AbrigoEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome: string;

  @Column({unique: true})
  email: string;

  @Column()
  senha: string;
  @Column()
  celular: string;


  @OneToOne(() => EnderecoEntity, {
    nullable: true,
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  endereco?: EnderecoEntity;

  @OneToMany(()=> PetEntity,(pet)=>pet.abrigo)
  pets!: PetEntity[];


  constructor(nome: string,celular:string, email: string,senha: string,endereco: EnderecoEntity) {
    this.nome = nome;
    this.celular = celular;
    this.email = email;
    this.senha = senha;
    this.endereco = endereco;
}

@BeforeInsert()
@BeforeUpdate()
private async criptografarSenha(){
  if(this.senha){
    this.senha = criaSenhaCriptografada(this.senha);
  }
}

}

