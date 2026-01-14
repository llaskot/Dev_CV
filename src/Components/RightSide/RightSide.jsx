import {useTranslation} from "react-i18next";
import RightBlock from "./RightBlock.jsx";

export default function RightSide() {
    const { t } = useTranslation();
    const right = t("right", { returnObjects: true })


    return (
        <div className={"rightSide"}>
            {right.map((block, i) => <RightBlock key={i} {...block} />)}
        </div>
    )


}