import AdotanteEntity from "../../entities/AdotanteEntity";
<<<<<<< HEAD
import EnderecoEntity from "../../entities/EnderecoEntity";
=======
import EnderecoEntity from "../../entities/Endereco";
>>>>>>> master

export default interface InterfaceAdotanteRepository {
  criaAdotante(adotante: AdotanteEntity): void | Promise<void>;

  listaAdotantes(): AdotanteEntity[] | Promise<AdotanteEntity[]>;

<<<<<<< HEAD
  atualizaAdotante(
    id: number,
    adotante: AdotanteEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaAdotante(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  atualizaEnderecoAdotante(
    idAdotante: number,
    endereco: EnderecoEntity
  ): Promise<{ success: boolean; message?: string }> | void;
=======
  atualizaAdotante(id: number, adotante: AdotanteEntity): void;

  deletaAdotante(id: number): void;

  atualizaEnderecoAdotante(idAdotante: number, endereco: EnderecoEntity): void;
>>>>>>> master
}
