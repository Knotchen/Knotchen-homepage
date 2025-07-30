// src/i18n/ui.ts
export const languages = {
  'zh-Hant': '繁體中文',
  en: 'English',
};

export const defaultLang = 'zh-Hant';
export const showDefaultLang = false;

export const ui = {
  'zh-Hant': {
    'site.home': '回到主頁',
    'nav.monthly-recipes': '每月料理',
    'nav.chefs': '團員介紹',
    'nav.trpg-records': 'TRPG跑團記錄',
    'nav.games': '遊戲專區',
    'nav.kitchen-universe': '廚房宇宙',
    'nav.contact': '聯絡我們',
    'lang.english': 'English', // For the language switch button
  },
  'en': {
    'site.home': 'Back to Home',
    'nav.monthly-recipes': 'Monthly Recipes',
    'nav.chefs': 'Meet the Team',
    'nav.trpg-records': 'TRPG Campaign Logs',
    'nav.games': 'Games Zone',
    'nav.kitchen-universe': 'Kitchen Universe',
    'nav.contact': 'Contact Us',
    'lang.english': 'English', // It's English for English too, but it's translated for consistency
  },
} as const;