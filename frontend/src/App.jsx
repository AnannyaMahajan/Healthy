import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="p-6">
      {/* Using translations instead of plain text */}
      <h1 className="text-3xl font-bold">{t("welcome")}</h1>
      <p className="text-lg text-gray-600">{t("tagline")}</p>

      {/* Language Switcher */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => changeLanguage("en")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("hi")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          हिंदी
        </button>
        <button
          onClick={() => changeLanguage("as")}
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          অসমীয়া
        </button>
      </div>
    </div>
  );
}

export default App;
