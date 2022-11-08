const mainKey = {
  reply_markup: {
    resize_keyboard: true,
    keyboard: [["Chet elda oliy ta'lim"], ["Aloqa", "Biz haqimizda"]],
  },
};

const universityKey = {
  reply_markup: {
    resize_keyboard: true,
    keyboard: [["Oliy ta'lim nomi"], ["Oliy ta'lim nomi", "Oliy ta'lim nomi"]],
  },
};

const infoKey = {
  reply_markup: {
    resize_keyboard: true,
    inline_keyboard: [
      [
        {
          text: "Fakuletlari",
          callback_data: "hi",
        },
        {
          text: "Qabul",
          callback_data: "hi2",
        },
      ],
    ],
  },
};
module.exports = {
  mainKey,
  universityKey,
  infoKey,
};
