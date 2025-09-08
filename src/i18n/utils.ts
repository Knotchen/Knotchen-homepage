import { ui, defaultLang, showDefaultLang } from './ui';
export type LanguageKey = keyof typeof ui;
export type Translations = typeof ui;

export function getLangFromUrl(url: URL) {
  // Split the pathname by '/' to get segments. Example: "/en/about" -> ["", "en", "about"]
  const [, lang] = url.pathname.split('/');
  if (lang in ui) {
    if (lang === defaultLang && showDefaultLang && url.pathname.startsWith('/')) {
        return defaultLang;
    }
    return lang as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}


export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  let normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  normalizedPath = normalizedPath.endsWith('/') ? normalizedPath.slice(0, -1) : normalizedPath;

  
if (normalizedPath === '') {
    if (lang === defaultLang && showDefaultLang) {
      return '/'; 
    } else {
      return `/${lang}/`; 
    }
  }

  // Handle other paths
  if (lang === defaultLang && showDefaultLang) {
    return `/${normalizedPath}`; 
  } else {
    return `/${lang}/${normalizedPath}`;
  }
}