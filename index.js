import express from "express";
import dotenv  from "dotenv";
dotenv.config();

const app = express();
app.get("/",(request, response) => {
  response.status(200).json({
    message: "cofre digital online!",
    environment: process.env.ENVIRONMENT,
    version: process.env.APP_VERSION
  });
});

app.get("/ database", (request, response) => {
    return response.status(200).json({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
    });
});

app.listen(300, () => {
    console.log("servidor está rodando na porta: 3000");
});