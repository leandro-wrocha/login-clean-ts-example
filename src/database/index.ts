import { AppDataSource } from "../data-source";

AppDataSource.initialize()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
