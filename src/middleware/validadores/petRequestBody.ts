import * as yup from "yup";
import { TipoRequestBodyPet } from "../../tipos/tiposPet";
import { NextFunction, Request, Response } from "express";
import { pt } from "yup-locale-pt";
import EnumEspecie from "../../enum/EnumEspecie";
import EnumPorte from "../../enum/EnumPorte";
<<<<<<< HEAD

yup.setLocale(pt);

const esquemaBodyPet: yup.ObjectSchema<Omit<TipoRequestBodyPet, "adotante"| "abrigo">
> = yup.object({
  nome: yup.string().defined().required(),

  // verifica se é um tipo válido dentro do Enum especificado
  especie: yup.string().oneOf(Object.values(EnumEspecie)).defined().required(),
  porte: yup.string().oneOf(Object.values(EnumPorte)).defined().required(),
 
  dataDeNascimento: yup.date().defined().required(),
  adotado: yup.boolean().defined().required(),
  
});
=======
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";

yup.setLocale(pt);

const esquemaBodyPet: yup.ObjectSchema<Omit<TipoRequestBodyPet, "adotante">> =
  yup.object({
    nome: yup.string().defined().required(),
    especie: yup
      .string()
      .oneOf(Object.values(EnumEspecie))
      .defined()
      .required(),
    porte: yup.string().oneOf(Object.values(EnumPorte)).defined().required(),
    dataDeNascimento: yup.date().defined().required(),
    adotado: yup.boolean().defined().required(),
  });
>>>>>>> master

const middlewareValidadorBodyPet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
<<<<<<< HEAD
  try {
    await esquemaBodyPet.validate(req.body, {
      abortEarly: false,
    });
    return next();
  } catch (error) {
    const yupErrors = error as yup.ValidationError;

    const validationErrors: Record<string, string> = {};

    yupErrors.inner.forEach((error) => {
      if (!error.path) return;
      validationErrors[error.path] = error.message;
    });
    return res.status(400).json({ error: validationErrors });
  }
=======
  tratarErroValidacaoYup(esquemaBodyPet, req, res, next);
>>>>>>> master
};

export { middlewareValidadorBodyPet };
