const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger configuration 
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Expense Tracker API",
      version: "1.0.0",
      description: "API documentation for the Expense Tracker application",
    },
    servers: [
      {
        url: "http://localhost:5000", 
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);


const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
