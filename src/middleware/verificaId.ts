import { NextFunction, Request, Response } from "express";
import { RequisicaoRuim } from "../utils/manipulaErros";

export const verificaIdMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    
    const params = { ...req.params };

    // verifica se o valor de params é inteiro,
    // para isso ele converte o valor de param em numero e veridica se é inteiro
    // depois caso não seja ele envia um erro.
    for (const param in params) {
        if(!Number.isInteger(Number(param))) {
            throw new RequisicaoRuim(
                `O parâmetro ${param} deve ser um número inteiro.`
            );
        }
    }
    

};
