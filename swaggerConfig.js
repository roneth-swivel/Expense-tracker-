const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger configuration options
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
        url: "http://localhost:5000", // Change based on your server URL
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Points to API route files where JSDoc comments exist
};

const swaggerSpec = swaggerJsdoc(options);

// Function to setup Swagger
const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
