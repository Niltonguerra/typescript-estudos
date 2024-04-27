<<<<<<< HEAD
=======
import "express-async-errors";
>>>>>>> master
import express from "express";
import router from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
<<<<<<< HEAD
=======
import { erroMiddleware } from "./middleware/erro";
>>>>>>> master
const app = express();
app.use(express.json());
router(app);

<<<<<<< HEAD
AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado!!!");
=======
app.get("/teste", () => {
  throw new Error("Erro teste");
});

app.use(erroMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
>>>>>>> master
  })
  .catch((erro) => {
    console.log(erro);
  });

export default app;
