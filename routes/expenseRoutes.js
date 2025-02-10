const express = require("express");
const router = express.Router();
const {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: API endpoints for managing expenses
 */

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
router.get("/", getAllExpenses);

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
 *     responses:
 *       201:
 *         description: Expense created successfully
 */
router.post("/", createExpense);

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
 *     responses:
 *       200:
 *         description: Expense updated successfully
 */
router.put("/:id", updateExpense);

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
router.delete("/:id", deleteExpense);

module.exports = router;
