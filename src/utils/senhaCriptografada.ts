import crypto from "crypto";

<<<<<<< HEAD
export const criaSenhaCriptografada= (senha:string)=>{
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHmac("sha256",salt);

  hash.update(senha);
  return hash.digest("hex");
}
=======
export const criaSenhaCriptografada = (senha: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHmac("sha256", salt);

  hash.update(senha);
  return hash.digest("hex");
};
>>>>>>> master
