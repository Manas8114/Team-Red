const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');
const path = require('path');

// Setup multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// POST /api/members
router.post('/', upload.single('image'), async (req, res) => {
  const { name, role, email, contact } = req.body;
  const image = req.file.filename;
  const newMember = new Member({ name, role, email, contact, image });
  await newMember.save();
  res.json(newMember);
});

// GET /api/members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// GET /api/members/:id
router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
