import * as yup from "yup";
import { TipoRequestBodyAdotante } from "../../tipos/tiposAdotante";
import { NextFunction, Request, Response } from "express";
import { pt } from "yup-locale-pt";
<<<<<<< HEAD
=======
import tratarErroValidacaoYup from "../../utils/trataValidacaoYup";
>>>>>>> master

yup.setLocale(pt);

const esquemaBodyAdotante: yup.ObjectSchema<
  Omit<TipoRequestBodyAdotante, "endereco">
> = yup.object({
  nome: yup.string().defined().required(),
  celular: yup
    .string()
    .defined()
    .required()
    .matches(
      /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
<<<<<<< HEAD
      "Celular inválido"
=======
      "celular inválido"
>>>>>>> master
    ),
  senha: yup
    .string()
    .defined()
    .required()
    .min(6)
    .matches(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      "senha inválida"
    ),
  foto: yup.string().optional(),
});

const middlewareValidadorBodyAdotante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
<<<<<<< HEAD
  try {
    await esquemaBodyAdotante.validate(req.body, {
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
  tratarErroValidacaoYup(esquemaBodyAdotante, req, res, next);
>>>>>>> master
};

export { middlewareValidadorBodyAdotante };
