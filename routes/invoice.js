const express = require('express');
const { checkAuth } = require('../middlewares/authMiddleware');
const { getDueInvoices } = require('../controllers/invoiceController');
const router = express.Router();

router.get('/due', checkAuth, getDueInvoices);

module.exports = router;
