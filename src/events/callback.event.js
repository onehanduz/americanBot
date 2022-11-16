const { types } = require("../tools/types");

function callbackEvents(bot) {
  bot.on("callback_query", function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const opts = {
      chat_id: msg.from.id,
      ///message_id: msg.message_id,
    };
    let text = "d";

    if (action === "manzil") {
      text = "Edited Text";
    }

    bot.sendMessage(msg.chat.id, text);
  });
}

module.exports = {
  callbackEvents,
};
