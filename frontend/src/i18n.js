import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to SmartHealth",
      tagline: "AI-powered Health Surveillance & Early Warning",
      reportIssue: "Report Health Issue",
      consentForm: "Consent Form",
      videoConsult: "Video Consultation",
      aiAssistant: "AI Health Assistant",
      alerts: "Outbreak Alerts",
      language: "Language",
    },
  },
  hi: {
    translation: {
      welcome: "स्मार्टहेल्थ में आपका स्वागत है",
      tagline: "एआई संचालित स्वास्थ्य निगरानी और प्रारंभिक चेतावनी",
      reportIssue: "स्वास्थ्य समस्या दर्ज करें",
      consentForm: "सहमति फॉर्म",
      videoConsult: "वीडियो परामर्श",
      aiAssistant: "एआई स्वास्थ्य सहायक",
      alerts: "रोग प्रकोप चेतावनी",
      language: "भाषा",
    },
  },
  as: {
    translation: {
      welcome: "SmartHealthলৈ আপোনাক স্বাগতম",
      tagline: "এআই-চলিত স্বাস্থ্য পৰ্যবেক্ষণ আৰু আগতীয়া সতৰ্কবাণী",
      reportIssue: "স্বাস্থ্য সমস্যা জনাওক",
      consentForm: "সম্মতি ফৰ্ম",
      videoConsult: "ভিডিঅ' পৰামৰ্শ",
      aiAssistant: "এআই স্বাস্থ্য সহায়ক",
      alerts: "ৰোগ প্ৰকোপ সতৰ্কবাণী",
      language: "ভাষা",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already escapes
  },
});

export default i18n;
