import * as yup from "yup";
import { NextFunction, Request, Response } from "express";
<<<<<<< HEAD
import EnderecoEntity from "../../entities/EnderecoEntity";
import { pt } from "yup-locale-pt";
=======
import EnderecoEntity from "../../entities/Endereco";
import { pt } from "yup-locale-pt";
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";
>>>>>>> master

yup.setLocale(pt);

const esquemaBodyEndereco: yup.ObjectSchema<Omit<EnderecoEntity, "id">> =
  yup.object({
    cidade: yup.string().defined().required(),
    estado: yup.string().defined().required(),
  });

const middlewareValidadorBodyEndereco = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
<<<<<<< HEAD
  try {
    await esquemaBodyEndereco.validate(req.body, {
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
  tratarErroValidacaoYup(esquemaBodyEndereco, req, res, next);
>>>>>>> master
};

export { middlewareValidadorBodyEndereco };
