import AdotanteEntity from "../entities/AdotanteEntity";

type TipoRequestBodyAdotante = Omit<AdotanteEntity, "id" | "pets">;

type TipoRequestParamsAdotante = { id?: string };

type TipoResponseBodyAdotante = {
<<<<<<< HEAD
  data?:
    | Pick<AdotanteEntity, "id" | "nome" | "celular" | "endereco">
    | Pick<AdotanteEntity, "id" | "nome" | "celular" | "endereco">[];
  error?: unknown;
=======
  dados?:
    | Pick<AdotanteEntity, "id" | "nome" | "celular" | "endereco">
    | Pick<AdotanteEntity, "id" | "nome" | "celular" | "endereco">[];
>>>>>>> master
};

export {
  TipoRequestBodyAdotante,
  TipoResponseBodyAdotante,
  TipoRequestParamsAdotante,
};
