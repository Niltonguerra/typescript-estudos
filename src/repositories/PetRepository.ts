import { Repository } from "typeorm";
<<<<<<< HEAD
import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";
import AdotanteEntity from "../entities/AdotanteEntity";
import { NaoEncontrado } from "../utils/manipulaErros";

export default class PetRepository implements InterfacePetRepository {
  
  private petRepository: Repository<PetEntity>;
  private adotanteRepository: Repository<AdotanteEntity>;



=======
import AdotanteEntity from "../entities/AdotanteEntity";
import PetEntity from "../entities/PetEntity";
import { NaoEncontrado } from "../utils/manipulaErros";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
  private petRepository: Repository<PetEntity>;
  private adotanteRepository: Repository<AdotanteEntity>;

>>>>>>> master
  constructor(
    petRepository: Repository<PetEntity>,
    adotanteRepository: Repository<AdotanteEntity>
  ) {
    this.petRepository = petRepository;
    this.adotanteRepository = adotanteRepository;
  }

<<<<<<< HEAD



  async criaPet(pet: PetEntity): Promise<void> {
    await this.petRepository.save(pet);
  }



  async listaPet(): Promise<PetEntity[]> {
    return await this.petRepository.find();
  }



  async atualizaPet(
    id: number,
    newData: PetEntity
): Promise<{ success: boolean; message?: string }> {
    const petToUpdate = await this.petRepository.findOne({ where: { id } });

    if (!petToUpdate) {
        throw new NaoEncontrado("Pet não encontrado");
=======
  async criaPet(pet: PetEntity): Promise<void> {
    await this.petRepository.save(pet);
  }
  async listaPet(): Promise<PetEntity[]> {
    return await this.petRepository.find();
  }
  async atualizaPet(id: number, newData: PetEntity) {
    const petToUpdate = await this.petRepository.findOne({ where: { id } });

    if (!petToUpdate) {
      throw new NaoEncontrado("Pet não encontrado");
>>>>>>> master
    }

    Object.assign(petToUpdate, newData);

    await this.petRepository.save(petToUpdate);
<<<<<<< HEAD
    
    return { success: true };
}




async deletaPet(id: number): Promise<{ success: boolean; message?: string }> {
    const petToRemove = await this.petRepository.findOne({ where: { id } });

    if (!petToRemove) {
        throw new NaoEncontrado("Pet não encontrado");
    }

    await this.petRepository.remove(petToRemove);
    
    return { success: true };
}





  async adotaPet(idPet: number,idAdotante: number): Promise<{ success: boolean; message?: string }> {

    const pet = await this.petRepository.findOne({ where: { id: idPet } });
    
    if (!pet) {
        throw new NaoEncontrado("Pet não encontrado");
    }
    
    const adotante = await this.adotanteRepository.findOne({
        where: { id: idAdotante },
    });
    
    if (!adotante) {
        throw new NaoEncontrado("Adotante não encontrado");
=======

    return { success: true };
  }

  async deletaPet(id: number) {
    const petToRemove = await this.petRepository.findOne({ where: { id } });

    if (!petToRemove) {
      throw new NaoEncontrado("Pet não encontrado");
    }

    await this.petRepository.remove(petToRemove);

    return { success: true };
  }

  async adotaPet(idPet: number, idAdotante: number) {
    const pet = await this.petRepository.findOne({ where: { id: idPet } });
    if (!pet) {
      throw new NaoEncontrado("Pet não encontrado");
    }

    const adotante = await this.adotanteRepository.findOne({
      where: { id: idAdotante },
    });
    if (!adotante) {
      throw new NaoEncontrado("Adotante não encontrado");
>>>>>>> master
    }

    pet.adotante = adotante;
    pet.adotado = true;
    await this.petRepository.save(pet);
    return { success: true };
  }

<<<<<<< HEAD



  

=======
>>>>>>> master
  async buscaPetPorCampoGenerico<Tipo extends keyof PetEntity>(
    campo: Tipo,
    valor: PetEntity[Tipo]
  ): Promise<PetEntity[]> {
    const pets = await this.petRepository.find({ where: { [campo]: valor } });
    return pets;
  }
}
