const { types } = require("../tools/types");
const { mainKey, universityKey, infoKey } = require("../tools/keyboard");

function msgEvents(bot) {
  bot.on("message", (msg) => {
    if (types(msg).text == "/start") {
      bot.sendMessage(
        types(msg).chatId,
        "Assalomu alaykum. Bo'limlar orqali bot(robot)dan foydalanishingiz mumkin",
        mainKey
      );
    }
    if (types(msg).text == "Chet elda oliy ta'lim") {
      bot.sendMessage(
        types(msg).chatId,
        "Ta'lim muassasini tanlang!",
        universityKey
      );
    }
    if (types(msg).text == "Oliy ta'lim nomi") {
      bot.sendMessage(
        types(msg).chatId,
        "Kerakli bo'lgan ma'lumot turini belgilang!",
        infoKey
      );
    }
    if (types(msg).text == "Aloqa") {
      bot.sendMessage(
        types(msg).chatId,
        "Tel. : +998901234567 \n Email: email@gmail.com \n Manzil: Al-Xorazmiy, Urganch, Xorazm, O'zbekistan",
        mainKey
      );
    }
    if (types(msg).text == "Biz haqimizda") {
      bot.sendMessage(
        types(msg).chatId,
        "American house haqida:  2019-yil davlat ro'yhat ro'yhatidan o'tib, to'liq qonuniy ish faoliyatini boshlagan. 2020-yil American house boshchiligida TATU Urganch filiali va Dubai Synergy, Moskva Sinergiya universitetlari o'rtasida shartnoma imzolandi. Xozirgi kunda Dubai Synergy Universitetining O'zbekistondagi rasmiy vakili hisoblanadi.",
        mainKey
      );
    }
  });
}

module.exports = {
  msgEvents,
};
