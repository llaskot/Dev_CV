import {useTranslation} from "react-i18next";
import "./NameSection.css"

export default function NameSection() {
    const { t } = useTranslation();
    return (
        <div className={"name-section"}>
            <h1>{t("name.first")}<br />{t("name.second")}</h1>
            <h3>{t("name.position")}</h3>
        </div>
    )

}