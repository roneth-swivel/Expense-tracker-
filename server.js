const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

dotenv.config();

const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api/expenses", authenticateToken, expenseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API!");
});

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});