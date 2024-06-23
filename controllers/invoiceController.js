const { triggerZapierWebhook } = require('../services/zapierService');

exports.getDueInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ userId: req.user.id, dueDate: { $lt: new Date() } });
    invoices.forEach(invoice => triggerZapierWebhook(invoice));
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
