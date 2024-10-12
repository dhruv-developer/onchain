const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
  const { name } = req.body;
  try {
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Unable to create user' });
  }
};
