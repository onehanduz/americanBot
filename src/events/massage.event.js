const { types } = require("../tools/types");
const { mainKey, foodKey, infoKey } = require("../tools/keyboard");
const fs = require("fs");
const path = require("path");
function msgEvents(bot) {
  bot.on("message", (msg) => {
    if (types(msg).text == "/start") {
      bot.sendMessage(
        types(msg).chatId,
        "Assalomu alaykum. Botdan foydalanish bo'yicha yo'riqnoma(kanal manzili)",
        mainKey
      );
    }
    if (types(msg).text == "Taomnoma") {
      bot.sendPhoto(
        types(msg).chatId,
        fs.createReadStream(path.join(__dirname, "menu.jpg"))
      );
      bot.sendMessage(types(msg).chatId, "Tanlang:", foodKey);
    }
    if (types(msg).text == "Qaynoq qanotcha") {
      bot.sendPhoto(
        types(msg).chatId,
        fs.createReadStream(path.join(__dirname, "qaynoq_qanot.jpg")),
        {
          caption:
            "*Qaynoq qanotcha* \nTarkibi: Halol tovuq qanotchasi\nNarxi: 1 porsiya uchun 25 000 so'm, 1.5 porsiyasi 30 000 so'm\nSoni: 1ta \nManzil: nomalum",
          reply_markup: infoKey,
          parse_mode: "Markdown",
        }
      );
    }
    if (types(msg).text == "Biz haqimizda") {
      bot.sendMessage(
        types(msg).chatId,
        "American house haqida:  2019-yil davlat ro'yhat ro'yhatidan o'tib, to'liq qonuniy ish faoliyatini boshlagan. 2020-yil American house boshchiligida TATU Urganch filiali va Dubai Synergy, Moskva Sinergiya universitetlari o'rtasida shartnoma imzolandi. Xozirgi kunda Dubai Synergy Universitetining O'zbekistondagi rasmiy vakili hisoblanadi.",
        { reply_markup: infoKey }
      );
    }
  });
}

module.exports = {
  msgEvents,
};
