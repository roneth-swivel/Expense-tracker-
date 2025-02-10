const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json"); // Assuming you've added the swagger.json file

// Load environment variables
dotenv.config();

// Import routes and db connection function
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS

// Swagger UI Route (ensure it's added correctly)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/api/expenses", expenseRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API!");
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
