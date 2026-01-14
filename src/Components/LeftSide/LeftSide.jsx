import {useTranslation} from "react-i18next";
import LeftBlock from "./LeftBlock.jsx";

export default function LeftSide() {
    const { t } = useTranslation();
    const left = t("left", { returnObjects: true })

    return (
        <div className={"leftSide"}>
            {left.map((block, i) => <LeftBlock key={i} {...block} />)}
        </div>
    )


}