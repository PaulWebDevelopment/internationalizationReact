import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
    const { t, i18n } = useTranslation();

    return (
        <div className={"App"}>
            <div className={"content"}>
                <h1>{t('hello_message', {name: "John"})}</h1>
                <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
                <button onClick={() => i18n.changeLanguage('en')}>English</button>
            </div>
        </div>
        );
    }
    
    export default App;