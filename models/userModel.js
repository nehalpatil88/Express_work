const db=require("../config/db");

///get all users
exports.getAllUsers=callback =>{
    db.query("SELECT * FROM users",callback);
};

// Get user by ID
exports.getUserById = (id, callback) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], callback);
};

// Create new user
exports.createUser = (userData, callback) => {
  db.query("INSERT INTO users SET ?", userData, callback);
};

// Update user
exports.updateUser = (id, userData, callback) => {
  db.query("UPDATE users SET ? WHERE id = ?", [userData, id], callback);
};

// Delete user
exports.deleteUser = (id, callback) => {
  db.query("DELETE FROM users WHERE id = ?", [id], callback);
};