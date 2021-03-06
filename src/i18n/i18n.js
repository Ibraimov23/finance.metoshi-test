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
          CONNECT: "Connect Wallet",
          HELPSTAKE1: "Your deposit will be locked for 45 days. However, the rewards will always be available for withdrawal.",
          HELPSTAKE2: "Your deposit is always available for withdrawal. However, the rewards will start unlocking after 30 days.",
          HELPAPR: "APR is not fixed and can change constantly",
          SOON: "Soon",
          HELPSOON: "You can swap your NFT to OSHI at the current rate. You will immediately receive 10% OSHI.. Unlock will start after OSHI listing, 15% per month.",
          HELPSOON2: "Rate displays how much OSHI costs 1 NFT",
        },
        SWAP: {
          SWAPMETO: "Swap METO to OSHI",
          SWAPNFT: "Start OSHI Vesting",
          RATE: "Rate",
          AVAILABLE: "Available OSHI",
          REMAINING: "Remaining OSHI",
          CLAIM: "Claim",
          CANCEL: "Cancel",
          CONFIRM: "Confirm",
          CONNECT: "Connect Wallet",
          APPROVE: "Approve",
          APPROVED: "Approved",
          HELPSWAP1: "You can swap your METO to OSHI at the current rate. You will immediately receive 10% OSHI.. Unlock will start after OSHI listing, 15% per month.",
          HELPSWAP2: "Rate displays how much METO costs 1 OSHI",
          BUY: "BUY METO"
        },
      },
    },
    ru: {
      translation: {
        PRODUCT: "???????? ????????????????",
        FINANCE: "??????????????",
        MARKETPLACE: "??????????????????????",
        COMICS: "??????????????",
        MEMES: "????????",
        WHITEPAPER: "Whitepaper",
        CONTACTS: "????????????????",

        ENG: "??????",
        RUS: "??????",

        BUTTON_TITLE: "???????????? METO",

        BACK: "??????????",
        STAKE: {
          STAKE_TITLE: "???????? METO - ?????????????? ",
          APR: "????????????",
          REWARD: "??????????????",
          EARNED: "????????????????????",
          UNLOCKED: "???????????????????????????????? ??????????????",
          EARN: "Earn",
          FEES: "??????????",
          HARVEST: "?????????????? ??????????????",
          WITHDRAW1: "??????????????",
          WITHDRAW2: "??????????????",
          STAKE: "????????????",
          INSTAKE: "????????????????",
          CONNECT: "???????????????????? ??????????????",
          HELPSTAKE1: "?????? ?????????????? ?????????? ???????????????????????? ???? 45 ????????. ???????????? ???????????????????????????? ???????????? ?????????? ???????????????? ?????? ????????????.",
          HELPSTAKE2: "?????? ?????????????? ???????????? ???????????????? ?????? ????????????. ???????????? ?????????????? ???????????? ???????????????????????????????? ?????????? 30 ????????.",
          HELPAPR: "???????????? ???? ???????????????? ?????????????????????????? ?? ?????????? ?????????????????? ????????????????",
          SOON: "C????????",
          HELPSOON: "???? ???????????? ???????????????? NFT ???? OSHI ???? ???????????????? ??????????. ???? ?????????? ???????????????? 10% OSHI. ?????????????????????????? ???????????????? ?????????? ???????????????? OSHI, 15% ?? ??????????.",
          HELPSOON2: "Rate ???????????????????? ?????????????? OSHI ?????????? 1 NFT",
        },
        SWAP: {
          SWAPMETO: "?????????? ???????? ???? OSHI",
          RATE: "????????",
          AVAILABLE: "?????????????????? ??SHI",
          REMAINING: "???????????????????? OSHI",
          CLAIM: "??????????????",
          CANCEL: "????????????",
          CONFIRM: "??????????????????????",
          CONNECT: "???????????????????? ??????????????",
          APPROVE: "????????????????",
          APPROVED: "????????????????",
          HELPSWAP1: "???? ???????????? ???????????????? ???????? METO ???? OSHI ???? ???????????????? ??????????. ???? ?????????? ???????????????? 10% OSHI. ?????????????????????????? ???????????????? ?????????? ???????????????? OSHI, 15% ?? ??????????.",
          HELPSWAP2: "???????? ???????????????????? ?????????????? ???????? ?????????? 1 OSHI",
          BUY: "???????????? METO"
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
