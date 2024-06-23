const axios = require('axios');

exports.triggerZapierWebhook = async (invoice) => {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  try {
    await axios.post(webhookUrl, invoice);
  } catch (err) {
    console.error('Failed to trigger Zapier webhook', err.message);
  }
};
