'use client';
import { PropsWithChildren, createContext, useState } from 'react';

const translations = {
  en: {
    name: 'Name',
    email: 'Email',
    date: 'Date',
    menuTitle: 'Menu',
  },
  nl: {
    name: 'Naam',
    email: 'E-mail',
    date: 'Datum',
    menuTitle: 'Menu',
  },
};

export type Language = 'nl' | 'en';

interface LanguageContextProps {
  currentLanguage: Language;
  i18n: typeof translations.en & typeof translations.nl;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'en',
  i18n: translations.en,
  setLanguage: () => {},
});

export function LanguageWrapper({ children }: PropsWithChildren) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const value: LanguageContextProps = {
    currentLanguage,
    i18n: translations[currentLanguage],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
