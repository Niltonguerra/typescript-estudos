import PetEntity from "../../entities/PetEntity";
<<<<<<< HEAD
import EnumPorte from "../../enum/EnumPorte";

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void | Promise<void>;



  
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>;





  atualizaPet(
    id: number,
    pet: PetEntity
  ): Promise<{ success: boolean; message?: string }> | void;





  deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;






  adotaPet(
    idPet: number,
    idAdotante: number
  ): Promise<{ success: boolean; message?: string }> | void;




=======

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): void | Promise<void>;
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>;
  atualizaPet(id: number, pet: PetEntity): void;

  deletaPet(id: number): void;
  adotaPet(idPet: number, idAdotante: number): void;
>>>>>>> master

  buscaPetPorCampoGenerico<Tipo extends keyof PetEntity>(
    campo: Tipo,
    valor: PetEntity[Tipo]
  ): Promise<PetEntity[]> | PetEntity[];
}
