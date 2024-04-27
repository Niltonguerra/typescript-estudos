import { Repository } from "typeorm";
import AdotanteEntity from "../entities/AdotanteEntity";
import InterfaceAdotanteRepository from "./interfaces/InterfaceAdotanteRepository";
<<<<<<< HEAD
import EnderecoEntity from "../entities/EnderecoEntity";
=======
import EnderecoEntity from "../entities/Endereco";
>>>>>>> master
import { NaoEncontrado, RequisicaoRuim } from "../utils/manipulaErros";

export default class AdotanteRepository implements InterfaceAdotanteRepository {
  constructor(private repository: Repository<AdotanteEntity>) {}

<<<<<<< HEAD
  private async verificaCelularAdotante(celular:string){
    return await this.repository.findOne({where:{celular}});
  }

   async criaAdotante(adotante: AdotanteEntity):  Promise<void> {
    if(await this.verificaCelularAdotante(adotante.celular)){
      throw new RequisicaoRuim("Celular já cadastrado"); 
    }
     this.repository.save(adotante);
  }


  async listaAdotantes(): Promise<AdotanteEntity[]> {
    return await this.repository.find();
  }
  async atualizaAdotante(
    id: number,
    newData: AdotanteEntity
): Promise<{ success: boolean; message?: string }> {

    const adotanteToUpdate = await this.repository.findOne({ where: { id } });

    if (!adotanteToUpdate) {
        throw new NaoEncontrado("Adotante não encontrado");
=======
  private async verificaCelularAdotante(celular: string) {
    return await this.repository.findOne({ where: { celular } });
  }





  async criaAdotante(adotante: AdotanteEntity): Promise<void> {


    if (await this.verificaCelularAdotante(adotante.celular)) {
      throw new RequisicaoRuim("Celular já cadastrado");
    }
    
    await this.repository.save(adotante);
  }





  async listaAdotantes(): Promise<AdotanteEntity[]> {
    return await this.repository.find();
  }
  async atualizaAdotante(id: number, newData: AdotanteEntity) {
    const adotanteToUpdate = await this.repository.findOne({ where: { id } });

    if (!adotanteToUpdate) {
      throw new NaoEncontrado("Adotante não encontrado");
>>>>>>> master
    }

    Object.assign(adotanteToUpdate, newData);

    await this.repository.save(adotanteToUpdate);
<<<<<<< HEAD
    
    return { success: true };
    
}


async deletaAdotante(
    id: number
): Promise<{ success: boolean; message?: string }> {
    const adotanteToRemove = await this.repository.findOne({ where: { id } });

    if (!adotanteToRemove) {
        throw new NaoEncontrado("Adotante não encontrado!");
    }

    await this.repository.remove(adotanteToRemove);
    
    return { success: true };
}


  async atualizaEnderecoAdotante(
    idAdotante: number,
    endereco: EnderecoEntity
  ): Promise<{ success: boolean; message?: string }> {


=======

    return { success: true };
  }

  async deletaAdotante(id: number) {
    const adotanteToRemove = await this.repository.findOne({ where: { id } });

    if (!adotanteToRemove) {
      throw new NaoEncontrado("Adotante não encontrado");
    }

    await this.repository.remove(adotanteToRemove);

    return { success: true };
  }

  async atualizaEnderecoAdotante(idAdotante: number, endereco: EnderecoEntity) {
>>>>>>> master
    const adotante = await this.repository.findOne({
      where: { id: idAdotante },
    });

    if (!adotante) {
<<<<<<< HEAD
      return { success: false, message: "Adotante não encontrado" };
=======
      throw new NaoEncontrado("Adotante não encontrado");
>>>>>>> master
    }

    const novoEndereco = new EnderecoEntity(endereco.cidade, endereco.estado);
    adotante.endereco = novoEndereco;
    await this.repository.save(adotante);
    return { success: true };
  }
<<<<<<< HEAD
  
=======
>>>>>>> master
}
