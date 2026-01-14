import {useTranslation} from "react-i18next";
import "./LangBtn.css"

export default function  Lang(){
    let child = "UA >"
    const { i18n } = useTranslation();
    const switchLang = async (lng) => {
        await i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);
    };
    if (i18n.language === "ua") child = "EN >"
    return (
        <div className="btns">
            <button  className="button" onClick={() => {
                i18n.language === "en" ? switchLang("ua") : switchLang("en")
            }}>{child}</button>
            <button className="print" onClick={() => window.print()}>
                🖨️
            </button>
        </div>
    )
}