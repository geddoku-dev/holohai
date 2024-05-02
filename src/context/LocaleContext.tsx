import React, { createContext, useState, ReactNode } from 'react';

interface Locale {
    language: string;
    messages: { [key: string]: string };
}

interface LocaleContextType extends Locale {
    changeLocale: (newLocale: Locale) => void;
}

const defaultLocale: Locale = {
    language: 'en',
    messages: {},
};

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocaleProviderProps {
    children: ReactNode;
}

const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
    const [locale, setLocale] = useState<Locale | null>(defaultLocale);

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
    };

    const contextValue: LocaleContextType | null = locale
        ? {
            ...locale,
            changeLocale,
        }
        : null;

    return (
        <LocaleContext.Provider value={contextValue}>
            {children}
        </LocaleContext.Provider>
    );
};

export { LocaleContext, LocaleProvider };
