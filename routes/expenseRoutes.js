const express = require("express");
const router = express.Router();
const {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

// Routes
router.get("/", getAllExpenses); // Get all expenses
router.post("/", createExpense); // Create a new expense
router.put("/:id", updateExpense); // Update an expense by ID
router.delete("/:id", deleteExpense); // Delete an expense by ID

module.exports = router;
