const mainKey = {
  reply_markup: {
    resize_keyboard: true,
    keyboard: [
      ["Taomnoma", "Buyurtmalarim"],
      ["Kissada qancha?"],
      ["Maʼlumotlarim", "Aloqa"],
      ["Ijtimoiy tarmoqlarimiz"],
    ],
  },
};

const foodKey = {
  reply_markup: {
    resize_keyboard: true,
    keyboard: [["Qaynoq qanotcha"]],
  },
};

const infoKey = {
  resize_keyboard: true,
  inline_keyboard: [
    [
      {
        text: "Sonini kiritish",
        callback_data: "soni",
      },
    ],
    [
      {
        text: "Manzilni kiritish",
        callback_data: "manzil",
      },
    ],
  ],
};
module.exports = {
  mainKey,
  foodKey,
  infoKey,
};
