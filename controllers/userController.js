const User = require("../models/userModel");

// Get all users
exports.getUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get user by ID
exports.getUser = (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
};

// Create a new user
exports.createUser = (req, res) => {
  User.createUser(req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User created", userId: results.insertId });
  });
};

// Update user
exports.updateUser = (req, res) => {
  User.updateUser(req.params.id, req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated" });
  });
};

// Delete user
exports.deleteUser = (req, res) => {
  User.deleteUser(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted" });
  });
};