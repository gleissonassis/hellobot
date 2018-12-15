const TeleBot = require('telebot');

const bot = new TeleBot('[TOKEN]');

bot.on('text', (msg) => {
  console.log(msg)
  msg.reply.text(msg.text)
});

bot.start();
