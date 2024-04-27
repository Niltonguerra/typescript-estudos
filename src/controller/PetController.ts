import { Request, Response } from "express";
<<<<<<< HEAD
import EnumEspecie from "../enum/EnumEspecie";
import EnumPorte from "../enum/EnumPorte";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";
=======
import PetEntity from "../entities/PetEntity";
import PetRepository from "../repositories/PetRepository";
>>>>>>> master
import {
  TipoRequestBodyPet,
  TipoRequestParamsPet,
  TipoResponseBodyPet,
} from "../tipos/tiposPet";

export default class PetController {
<<<<<<< HEAD


  constructor(private repository: PetRepository) {}





  async criaPet(req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,res: Response<TipoResponseBodyPet>) {

    const { adotado, especie, dataDeNascimento, nome, porte } = <PetEntity> (req.body);
=======
  constructor(private repository: PetRepository) {}
  async criaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { adotado, especie, dataDeNascimento, nome, porte } = <PetEntity>(
      req.body
    );
>>>>>>> master

    const novoPet = new PetEntity(
      nome,
      especie,
      dataDeNascimento,
      adotado,
      porte
    );

    await this.repository.criaPet(novoPet);
    return res
      .status(201)
<<<<<<< HEAD
      .json({ data: { id: novoPet.id, nome, especie, porte } });
  }



  
  async listaPet(req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,res: Response<TipoResponseBodyPet>) {

    const listaDePets = await this.repository.listaPet();

    const data = listaDePets.map((pet) => {
      return {
        id: pet.id,
        nome: pet.nome,
        porte: pet.porte!==null?pet.porte:undefined,
        especie: pet.especie,
      };
    });


    return res.status(200).json({ data });
  }

  async atualizaPet(req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,res: Response<TipoResponseBodyPet>) {


    const { id } = req.params;

    const { success, message } = await this.repository.atualizaPet(Number(id),req.body as PetEntity);

    if (!success) {
      return res.status(404).json({ error: message });
    }
    return res.sendStatus(204);
  }


  

  async deletaPet(req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,res: Response<TipoResponseBodyPet>) {


    const { id } = req.params;

    const { success, message } = await this.repository.deletaPet(Number(id));

    if (!success) {
      return res.status(404).json({ error: message });
    }
=======
      .json({ dados: { id: novoPet.id, nome, especie, porte } });
  }

  async listaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const listaDePets = await this.repository.listaPet();
    const dados = listaDePets.map((pet) => {
      return {
        id: pet.id,
        nome: pet.nome,
        porte: pet.porte !== null ? pet.porte : undefined,
        especie: pet.especie,
      };
    });
    return res.status(200).json({ dados });
  }

  async atualizaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { id } = req.params;
    await this.repository.atualizaPet(Number(id), req.body as PetEntity);
>>>>>>> master

    return res.sendStatus(204);
  }

<<<<<<< HEAD
  async adotaPet(req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,res: Response<TipoResponseBodyPet>) {


    const { pet_id, adotante_id } = req.params;

    const { success, message } = await this.repository.adotaPet(Number(pet_id),Number(adotante_id) );

    if (!success) {
      return res.status(404).json({ error: message });
    }
=======
  async deletaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { id } = req.params;

    await this.repository.deletaPet(Number(id));

    return res.sendStatus(204);
  }

  async adotaPet(
    req: Request<TipoRequestParamsPet, {}, TipoRequestBodyPet>,
    res: Response<TipoResponseBodyPet>
  ) {
    const { pet_id, adotante_id } = req.params;

    await this.repository.adotaPet(Number(pet_id), Number(adotante_id));
>>>>>>> master

    return res.sendStatus(204);
  }

  async buscaPetPorCampoGenerico(req: Request, res: Response) {
<<<<<<< HEAD

    const { campo, valor } = req.query;

    const listaDePets = await this.repository.buscaPetPorCampoGenerico(campo as keyof PetEntity,valor as string);

    
=======
    const { campo, valor } = req.query;
    const listaDePets = await this.repository.buscaPetPorCampoGenerico(
      campo as keyof PetEntity,
      valor as string
    );
>>>>>>> master
    return res.status(200).json(listaDePets);
  }
}
