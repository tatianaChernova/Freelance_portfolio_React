import { useTranslation } from "react-i18next";
import "./styles.css";
import langRu from "./ru-icon.png";
import langEn from "./en-icon.png";

const BtnLang = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    // const btnNormal = 'lang-btn';
    // const btnActive = 'lang-btn lang-btn--active';
    return (
        <>
            <button className="lang-btn" onClick={() => changeLanguage("en")}>
                <img src={langEn} alt="English" className="lang-btn__icon" />
            </button>
            <button className="lang-btn" onClick={() => changeLanguage("ru")}>
                <img src={langRu} alt="Russian" className="lang-btn__icon" />
            </button>
        </>

        //   <div>{t("text")}</div>
        //   <div>{t("hello")}</div>



    );
}

export default BtnLang;