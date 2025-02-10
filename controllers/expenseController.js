const Expense = require("../models/Expense");

// Get all expenses
/**
 * @swagger
 * /api/expenses:
 *   get:
 *     summary: Get all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: Successfully retrieved all expenses
 */
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};

// Create a new expense
/**
 * @swagger
 * /api/expenses:
 *   post:
 *     summary: Create a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Grocery Shopping"
 *               amount:
 *                 type: number
 *                 example: 50.75
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-05"
 *               category:
 *                 type: string
 *                 example: "Food"
 *     responses:
 *       201:
 *         description: Expense created successfully
 */
const createExpense = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const newExpense = new Expense({ title, amount, date, category });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ error: "Failed to create expense" });
  }
};

// Update an expense
/**
 * @swagger
 * /api/expenses/{id}:
 *   put:
 *     summary: Update an expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the expense to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Grocery Shopping"
 *               amount:
 *                 type: number
 *                 example: 60.00
 *               category:
 *                 type: string
 *                 example: "Groceries"
 *     responses:
 *       200:
 *         description: Expense updated successfully
 */
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(400).json({ error: "Failed to update expense" });
  }
};

// Delete an expense
/**
 * @swagger
 * /api/expenses/{id}:
 *   delete:
 *     summary: Delete an expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the expense to delete
 *     responses:
 *       200:
 *         description: Expense deleted successfully
 */
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete expense" });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
};
