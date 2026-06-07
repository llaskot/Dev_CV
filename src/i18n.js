// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "./locales/en.json";
// import uk from "./locales/uk.json";
//
// i18n.use(initReactI18next).init({
//     resources: {
//         en: { translation: en },
//         ua: { translation: uk }
//     },
//     lng: localStorage.getItem("lang") || "en",
//     fallbackLng: "en",
//     interpolation: { escapeValue: false }
// });
//
// export default i18n;


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
    .use(HttpBackend) // Подключаем загрузку по HTTP
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false },
        backend: {
            // Путь, откуда брать файлы. Обязательно с /Dev_CV/, так как это базовый путь на GitHub Pages
            // loadPath: '/Dev_CV/locales/{{lng}}/translation.json'
            loadPath: `https://raw.githubusercontent.com/llaskot/Dev_CV/main/public/locales/{{lng}}.json?v=` + new Date().getTime()
        }
    });

export default i18n;