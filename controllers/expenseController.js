const Expense = require('../models/Expense');

// Get all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Add a new expense
const addExpense = async (req, res) => {
    const { description, amount, category } = req.body;

    try {
        const newExpense = new Expense({ description, amount, category });
        const savedExpense = await newExpense.save();
        res.status(201).json(savedExpense);
    } catch (error) {
        res.status(400).json({ message: 'Error adding expense' });
    }
};

// Update an expense
const updateExpense = async (req, res) => {
    const { id } = req.params;
    const { description, amount, category } = req.body;

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            id,
            { description, amount, category },
            { new: true }
        );
        res.json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: 'Error updating expense' });
    }
};

// Delete an expense
const deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        await Expense.findByIdAndDelete(id);
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting expense' });
    }
};

module.exports = { getExpenses, addExpense, updateExpense, deleteExpense };