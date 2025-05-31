import type { AstroGlobal } from 'astro';

const translations = {
  es: () => import('./es.json'),
  en: () => import('./en.json'),
};

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
  ];
}

export async function getTranslations(lang: string = 'es') {
  const validLang = lang in translations ? lang : 'es';
  const translation = await translations[validLang as keyof typeof translations]();
  return translation.default || translation;
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return 'es';
}

export function useTranslations(Astro: AstroGlobal) {
  return getLangFromUrl(Astro.url);
}
