import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        PRODUCT: "Our products",
        FINANCE: "Finance",
        MARKETPLACE: "Marketplace",
        COMICS: "Comics",
        MEMES: "Memes",
        WHITEPAPER: "Whitepaper",
        CONTACTS: "Contacts",

        ENG: "ENG",
        RUS: "RUS",

        BUTTON_TITLE: "Buy METO",

        BACK: "Back",
        STAKE: {
          STAKE_TITLE1: "Staking METO 2.0",
          STAKE_TITLE2: "Staking METO 1.0",
          APR: "APR",
          EARNED: "Earned",
          REWARD: "Reward",
          UNLOCKED: "Unlocked Reward",
          EARN: "Earn",
          FEES: "Fees",
          HARVEST: "Harvest",
          WITHDRAW1: "Withdraw Dep",
          WITHDRAW2: "Withdraw All",
          STAKE: "Stake",
          INSTAKE: "in Stake",
          HELPSTAKE1: "Your deposit will be locked for 30 days. However, the rewards will always be available for withdrawal.",
          HELPSTAKE2: "Your deposit is always available for withdrawal. However, the rewards will start unlocking after 30 days.",
          HELPAPR: "APR is not fixed and can change constantly"
        },
      },
    },
    ru: {
      translation: {
        PRODUCT: "Наши продукты",
        FINANCE: "Финансы",
        MARKETPLACE: "Маркетплейс",
        COMICS: "Комиксы",
        MEMES: "Мемы",
        WHITEPAPER: "Whitepaper",
        CONTACTS: "Контакты",

        ENG: "АНГ",
        RUS: "РУС",

        BUTTON_TITLE: "Купить METO",

        BACK: "Назад",
        STAKE: {
          STAKE_TITLE: "Внес METO - Получил ",
          APR: "Ставка",
          REWARD: "Награда",
          EARNED: "заработано",
          UNLOCKED: "Разблокированная награда",
          EARN: "Earn",
          FEES: "сборы",
          HARVEST: "Забрать награду",
          WITHDRAW1: "Вывести",
          WITHDRAW2: "Вывести",
          STAKE: "Внести",
          INSTAKE: "хранится",
          HELPSTAKE1: "Ваш депозит будет заблокирован на 30 дней. Однако вознаграждения всегда будут доступны для вывода.",
          HELPSTAKE2: "Ваш депозит всегда доступен для вывода. Однако награды начнут разблокироваться через 30 дней.",
          HELPAPR: "Ставка не является фиксированным и может постоянно меняться"
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,

  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
    bindI18n: "languageChanged",
  },
});

export default i18n;
