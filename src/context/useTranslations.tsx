import { useContext, useEffect, useState } from 'react';
import { LocaleContext } from './LocaleContext';

interface LocaleData {
    [key: string]: () => Promise<{ default: Record<string, string> }>;
}

const LocalesData: LocaleData = {
    en: () => import('../locales/en.json'),
};

const useTranslations = () => {
    const localeContext = useContext(LocaleContext);

    const [messages, setMessages] = useState<Record<string, string>>({});

    useEffect(() => {
        if (localeContext && localeContext.language && LocalesData[localeContext.language]) {
            LocalesData[localeContext.language]()
                .then((res) => setMessages(res.default))
                .catch(error => console.error(error));
        }
    }, [localeContext]);

    return messages;
};

export default useTranslations;
