const express = require("express");
const api = require("./services/swapi");

const server = express();

server.use(express.json());

server.listen(8001);

server.get("/people/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const { data } = await api.get(`people/${id}`);

    return response.json(data);
  } catch (error) {
    response.send({ error: error.message });
  }
});

  server.get("/planets/:id", async (request, response) => {
    const { id } = request.params;
    try {
      const { data } = await api.get(`planets/${id}`);

      return response.json(data);
    } catch (error) {
      response.send({ error: error.message });
    }
});
