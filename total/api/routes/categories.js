const router = require("express").Router();
const category = require("../models/Category");

router.post("/", async (req, res) => {
  const newcategory = new category(req.body);
  try {
    const savedcategory = await newcategory.save();
    res.status(200).json(savedcategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const newcategory = new category(req.body);
  try {
    const categories = await category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
