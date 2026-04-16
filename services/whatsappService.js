// WhatsApp integration for automated messaging
const WhatsApp = require('whatsapp-web.js');

function sendMessage(phoneNumber, message) {
    const client = new WhatsApp.Client();
    client.on('qr', (qr) => {
        // Generate and scan this QR code for authentication
    });
    client.initialize();
    client.on('ready', () => {
        console.log('WhatsApp client is ready!');
        client.sendMessage(phoneNumber, message);
    });
}

module.exports = { sendMessage };