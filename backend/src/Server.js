import express from "express";
import { ENVPORT, Global } from "./Config/config.js";

export default class {
  constructor() {
    this.app = express();
    this.port = ENVPORT.PORT;
    this.midlewares = Global(this.app);
    this.routes();
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.clear();
      console.log(`Server Runing in ${this.port}`);
    });
  }
}
