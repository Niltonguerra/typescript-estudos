import { Request, Response } from "express";
import AdotanteEntity from "../entities/AdotanteEntity";
<<<<<<< HEAD
import AdotanteRepository from "../repositories/AdotanteRepository";
import EnderecoEntity from "../entities/EnderecoEntity";

=======
import EnderecoEntity from "../entities/Endereco";
import AdotanteRepository from "../repositories/AdotanteRepository";
>>>>>>> master

import {
  TipoRequestBodyAdotante,
  TipoRequestParamsAdotante,
  TipoResponseBodyAdotante,
} from "../tipos/tiposAdotante";

export default class AdotanteController {
  constructor(private repository: AdotanteRepository) {}
<<<<<<< HEAD
=======




>>>>>>> master
  async criaAdotante(
    req: Request<TipoRequestParamsAdotante, {}, TipoRequestBodyAdotante>,
    res: Response<TipoResponseBodyAdotante>
  ) {
<<<<<<< HEAD
=======


>>>>>>> master
    const { nome, celular, endereco, foto, senha } = <AdotanteEntity>req.body;

    const novoAdotante = new AdotanteEntity(
      nome,
      senha,
      celular,
      foto,
      endereco
    );

    await this.repository.criaAdotante(novoAdotante);
    return res
      .status(201)
<<<<<<< HEAD
      .json({ data: { id: novoAdotante.id, nome, celular, endereco } });
  }
=======
      .json({ dados: { id: novoAdotante.id, nome, celular, endereco } });
  }







>>>>>>> master
  async atualizaAdotante(
    req: Request<TipoRequestParamsAdotante, {}, TipoRequestBodyAdotante>,
    res: Response<TipoResponseBodyAdotante>
  ) {
    const { id } = req.params;
<<<<<<< HEAD
    const { success, message } = await this.repository.atualizaAdotante(
=======
    await this.repository.atualizaAdotante(
>>>>>>> master
      Number(id),
      req.body as AdotanteEntity
    );

<<<<<<< HEAD
    if (!success) {
      return res.status(404).json({ error: message });
    }

=======
>>>>>>> master
    return res.sendStatus(204);
  }

  async listaAdotantes(
    req: Request<TipoRequestParamsAdotante, {}, TipoRequestBodyAdotante>,
    res: Response<TipoResponseBodyAdotante>
  ) {
    const listaDeAdotantes = await this.repository.listaAdotantes();
<<<<<<< HEAD
    const data = listaDeAdotantes.map((adotante) => {
=======
    const dados = listaDeAdotantes.map((adotante) => {
>>>>>>> master
      return {
        id: adotante.id,
        nome: adotante.nome,
        celular: adotante.celular,
        endereco: adotante.endereco !== null ? adotante.endereco : undefined,
      };
    });
<<<<<<< HEAD
    return res.json({ data });
  }

=======
    return res.json({ dados });
  }





>>>>>>> master
  async deletaAdotante(
    req: Request<TipoRequestParamsAdotante, {}, TipoRequestBodyAdotante>,
    res: Response<TipoResponseBodyAdotante>
  ) {
    const { id } = req.params;

<<<<<<< HEAD
    const { success, message } = await this.repository.deletaAdotante(
      Number(id)
    );

    if (!success) {
      return res.status(404).json({ error: message });
    }
    return res.sendStatus(204);
  }

=======
    await this.repository.deletaAdotante(Number(id));

    return res.sendStatus(204);
  }










>>>>>>> master
  async atualizaEnderecoAdotante(
    req: Request<TipoRequestParamsAdotante, {}, EnderecoEntity>,
    res: Response<TipoResponseBodyAdotante>
  ) {
    const { id } = req.params;

<<<<<<< HEAD
    const { success, message } = await this.repository.atualizaEnderecoAdotante(
      Number(id),
      req.body
    );

    if (!success) {
      return res.status(404).json({ error: message });
    }
=======
    await this.repository.atualizaEnderecoAdotante(Number(id), req.body);

>>>>>>> master
    return res.sendStatus(204);
  }
}
